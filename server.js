const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/api', (req,res) => {
 const data = [
     {id: 1, data:'Hello World'},
     {id: 2, data:'Hello World'},
     {id: 3, data:'Hello World'}];
res.json(data);
});

/*Send Build Directory*/
app.use(express.static(__dirname + '/client/build/' , {redirect: false}));

/*Send static directory*/
app.use(express.static(__dirname + '/client/build/static' , {redirect: false}));

/*Sends any to index.html*/
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});



app.listen(port, () => console.log(`Listening on port ${port}`))