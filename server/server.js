const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mainRouter = require('./router/router');
const PORT = process.env.PORT || 5000;
require('dotenv').config({ path: '../.env' });

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
app.use(express.json());

mongoose
  .connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection was successful');
  })
  .catch((e) => {
    console.log(e);
    console.log('Error while connecting to db');
  });

app.use(['/'], mainRouter);
