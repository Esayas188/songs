require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json())







// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() =>{
    console.log('connected to mongodb..');
    app.listen(process.env.PORT, () => {
      console.log('listening on port 4000...');
    });
  }
  )