// import { MongoClient } from "mongodb";
//import { sql } from "mssql";

const sql = require("mssql");

// async function getProducts() {
//   const uri = process.env.MONGODB_CONNECTION_STRING;
//   const dbName = process.env.MONGODB_DB_NAME;
//   const client = await MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const collection = client.db(dbName).collection("albums");

//   const albums = await collection.find({}).toArray();

//   client.close();

//   return albums;
// }

// "Server=localhost,1433;Database=Misc;User Id=sa;Password=admin;"

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: "localhost",
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: false,
  },
};

export default async function handler(req, res) {
  const albums = await getProducts();

  setTimeout(() => res.status(200).json(albums), 3000);
}
