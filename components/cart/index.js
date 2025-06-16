import CartItem from "./cart-item";
import { currencyFormat } from "../../utils/numericFormatters";
import styles from "./Cart.module.scss";

function Cart({ cartItems, removeItemFromCart }) {
  function getCartTotal() {
    // const totalCost = cartItems.reduce((prev, curr) => {

    //   const itemPrice =
    //     curr.discount === 0 ? curr.price : curr.price * (1 - curr.discount);
    //   return prev + itemPrice;
    // }, 0);

    const totalCost = cartItems.reduce((prev, curr) => {
      const discount = "discount" in curr ? curr.discount : 0;
      const itemPrice =
        discount === 0 ? curr.price : curr.price * (1 - discount);
      return prev + itemPrice;
    }, 0);

    return currencyFormat(totalCost);
  }

  function renderEmptyCart() {
    return (
      <div className={styles.emptyCart}>You have no items in your cart</div>
    );
  }

  function renderCart() {
    return (
      <ul className={styles.cart}>
        {cartItems.map((product, i) => (
          <li className={styles.cartItem} key={i}>
            <CartItem
              product={product}
              removeItemFromCart={removeItemFromCart}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? renderCart() : renderEmptyCart()}
      {cartItems.length > 0 ? (
        <div className={styles.total}>Total: {getCartTotal()}</div>
      ) : null}
    </div>
  );
}

export default Cart;
