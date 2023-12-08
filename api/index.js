const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const Transaction  = require('./models/Transaction')
const { default: mongoose } = require('mongoose')

app.use(cors())
app.use(express.json())
app.get('/api/test', (req,res)=>{
    res.json('test ok')
})
app.post('/api/transaction', async(req,res)=>{
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    const {price, name, description, datetime}= req.body;
    const transaction = await Transaction.create({price, name,description,datetime})
    res.json(transaction)
})

app.get('/api/transactions', async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL)
    const transactions = await Transaction.find();
    res.json(transactions)
})
app.listen(4000)
// kharelpawannp
// hktH4d3pJ9JxI35f