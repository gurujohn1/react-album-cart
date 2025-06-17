import { useState, useEffect } from "react";
import styles from "./Catalog.module.scss";
//import products from "./products.json";
import ProductDetails from "@/components/product-details";
import Cart from "@/components/cart";
import Layout from "@/components/layout";

const sql = require("mssql");

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: "localhost",
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: false,
  },
};

// export async function getServerSideProps() {
//   async function getProducts() {
//     try {
//       const client = await sql.connect(config);
//       console.log("Connected to the database");
//       const albums = await client.request().query("select * from products");

//       return albums.recordset;
//     } catch (err) {
//       console.error("Database connection failed: ", err);
//     }
//   }

export async function getStaticProps() {
  async function getProducts() {
    try {
      const client = await sql.connect(config);
      console.log("Connected to the database");
      const albums = await client.request().query("select * from products");

      return albums.recordset;
    } catch (err) {
      console.error("Database connection failed: ", err);
    }
  }

  const productsFromDb = await getProducts();
  //console.log(productsFromDb);
  return { props: { products: productsFromDb }, revalidate: 60 };
}

function Catalog({ products }) {
  const [cart, setCart] = useState({ products: [] });
  //const [products, setProducts] = useState([]);

  // function fetchProducts() {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }

  //useEffect(() => fetchProducts(), []);

  function addToCart(product) {
    const newCart = { _id: cart._id };
    newCart.products = [...cart.products, { ...product }];
    setCart(newCart);
  }

  function removeItemFromCart(product) {
    const newCart = { _id: cart._id };
    newCart.products = cart.products.filter((item) => item !== product);
    setCart(newCart);
  }
  {
    process.env.NEXT_PUBLIC_FEATURE1_ENABLED.toUpperCase() === "TRUE"
      ? console.log("ENABLED")
      : console.log("DISABLED");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.rightSidebar}>
          <h2>Cart</h2>
          <Cart
            cartItems={cart.products}
            removeItemFromCart={removeItemFromCart}
          />
        </div>
      </div>
    </>
  );
}

// Catalog.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

export default Catalog;
