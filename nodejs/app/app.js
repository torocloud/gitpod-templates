const express = require('express');
const app = express();
const port = 4000;

//serve html using express
app.use(express.static('./app/public'));
 
// GET method route
app.get('/api', function(req, res) {
    res.send({message: 'Accessed /api'});
});
 
// listen for requests in port 4000
app.listen(process.env.port || port, function(){
    console.log('Now listening for requests...');
});