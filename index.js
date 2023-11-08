const express = require('express')
const  mongoose = require('mongoose')

const app = express()
const port = 7800

// connecting to datbase
mongoose.connect('mongodb+srv://akandeolawole:Timothy@cluster0.dlaqp7u.mongodb.net/')
const db = mongoose. connection;
db.on('error',(error)=>{
    console.log('error')
})
db.once('open',()=>console.log('connected to database sucessfully'))

// configuring server to accept json
app.use(express.json())

app.get('/', (req,res) => res.send('welcome to homepage'))


const productRoutes = require('./product/product.js')
app.use(productRoutes)




app.listen(port, () => {
    console.log('server working sucessfully')
})


