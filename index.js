const express = require('express');
const app = express();  //object of express

// app.use((req, res)=> {
//     console.log('We got a new request');
//     res.send('<h1>This is my webpage</h1>');
// });

//ROUTE 
app.get('/cats', (req, res) => {
    console.log('New request to /cats');
    res.send('Meow');
});

app.get('/dogs', (req, res) => {
    console.log('New request to /dogs');
    res.send('Hoof');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});



