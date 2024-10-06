const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://ParmDev:ParmDev21@dev.c30en.mongodb.net/Dev?retryWrites=true&w=majority&appName=Dev";

const client = new MongoClient(url);

const dbName = "Dev";

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection("Test");

    // You can now perform operations on the collection here
    console.log("Collection selected:", collection.Test);

    const data = {
      firstName: "Donald",
      lastName: "Trumph",
      age: 45,
    };

    // Insert a document into the collection

    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);

    // Read
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
