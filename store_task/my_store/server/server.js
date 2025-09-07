const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let collection;

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db('store_data');
        collection = database.collection('products');
    } catch (error) {
        console.error("Connection failed", error);
    }
}

connectDB(); 


app.get('/api/products', async (req, res) => {
    try {
        const products = await collection.find({}).toArray();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
