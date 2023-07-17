const express = require('express');
const app = express();  //object of express

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyajikan file statis dari direktori "views"
app.use(express.static('views'));

//Route Aplikasi
app.get('/pendaftaran', (req, res) => {
    res.render('pendaftaran');
    res.send('Get Method berhasil');
});

app.post('/pendaftaran', (req, res) => {
    // console.log(req.body);
    const { nama, umur, email, tempat_tinggal } = req.body;
    res.send(`Nama: ${nama} Umur: ${umur} Email: ${email} Tempat Tinggal: ${tempat_tinggal}`);
});

//Startup Server 
app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});



