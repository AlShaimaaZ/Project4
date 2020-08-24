var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv')

dotenv.config();

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(`Your API key is ${process.env.API_KEY}`);
})


app.post('/all', function (req, res) {
    textapi.sentiment({
        url: req.body.url
      }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
        res.send(response);
      });
})
