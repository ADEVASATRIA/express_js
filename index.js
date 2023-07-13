const express = require('express');
const app = express();  //object of express

app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home');    
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});



