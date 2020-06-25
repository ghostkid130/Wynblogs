if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 8080;

require('dotenv').config()
require('../database/mongoose')

app.use(express.json())
app.use(cors())







if(process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}


app.listen( port, () => {
    console.log(`Express server is up on port ${port}`)
})