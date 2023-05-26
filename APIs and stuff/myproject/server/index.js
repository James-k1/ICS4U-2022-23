const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('db.js')


const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

const Product = require('./models/Product')

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err){
        res.status(500).json({error: err.message});

    }
})

app.get('/api/products/:id', async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (err){
        res.status(500).json({error: err.message});
        
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body) 
        await product.save();
        res.json(product);
    } catch (err){
        res.status(500).json;
        
    }
})