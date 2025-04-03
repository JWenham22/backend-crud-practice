const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Product = require('./models/productModel');
const port = 3000;

// import routes
const productRouter = require('./controllers/product')

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

app.use(express.json())

// Routes
app.use('/api/products', productRouter)


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});