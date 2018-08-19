const express= require('express');
var app= express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

var port= process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Express server started on port: '+port);
});