import { MongoClient } from "mongodb";
const uri = "mongodb+srv://fernando:fernando@cluster0.jsvvpuu.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;