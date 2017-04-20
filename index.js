var express = require('express');

//create express app
var app = express();

//You will need specific a port to use
var port = process.env.PORT || 3000;

//This is a special setting for open weather map, because the API is using http,
// but most of the hosting services are using https
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

//tell express which folder to server
app.use(express.static("public"));

//start app
app.listen(port, function() {
    console.log('App is running on port 3000');
});