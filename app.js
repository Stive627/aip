const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const productRouter = require('./Products/productRouter')
const app = express()
const uri = process.env.uri
const port = process.env.port || 8080
app.get('/', (req, res) => res.status(200).send('The API is working normally!'))
app.use('/products', productRouter)
mongoose.connect(uri, {dbName:"ecommerce"}).then(()=> console.log('Connected to mongodb')).catch(err => console.error(err))
app.listen(port, () => console.log(`The server is running at http://localhost:${port}`))