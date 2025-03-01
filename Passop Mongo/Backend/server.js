import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb'
import cors from 'cors'
dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Passfort';
const app = express()
app.use(bodyParser.json());
app.use(cors())
const port = 3000
await client.connect();
app.get('/', async(req, res) => {
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})
app.post('/', async(req, res) => {
  const password=  req.body
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
  res.json({success:true,result:findResult})
})
app.delete('/', async(req, res) => {
  const password=  req.body
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
  res.json({success:true,result:findResult})
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})