const express = require('express');
const app = express();  //object of express

app.set('view engine', 'ejs');

// Menyajikan file statis dari direktori "views"
app.use(express.static('views'));



//Route Aplikasi
app.get('/home', (req, res) => {
    res.render('home');    
});


//Startup Server 
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});



