const express = require('express');
const app = express();  //object of express



app.use((req, res)=> {
    console.log('We got a new request');
    res.send('<h1>This is my webpage</h1>');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

