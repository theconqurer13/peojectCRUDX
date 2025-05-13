const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/server-config');

const prepareAndStartServer = () =>{
    app.listen(3000,()=>{
        console.log(`Server started at port ${PORT}`);
    })
}

prepareAndStartServer();