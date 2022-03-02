const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

require('dotenv').config();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));




//connection pool

const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME,
    port           : process.env.DB_PORT
});
//connect to  DB
// pool.getConnection((err,connection)=>{
//     if(err) console.log(err);
//     console.log('connected as ID '+ connection.threadId);

// })

const routes = require('./server/routes/user');
app.use('/',routes);

app.listen(port,()=>console.log(`listening on port ${port}`));