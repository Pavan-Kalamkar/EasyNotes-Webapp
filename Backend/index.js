const ConnectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

ConnectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./Routes/auth'));
app.use('/api/notes',require('./Routes/notes'));


app.listen(port, () => {
  console.log(`notebook app listening on port ${port}`)
})