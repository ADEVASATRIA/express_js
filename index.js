const express = require('express');
const app = express();  //object of express



app.use(()=> {
    console.log('We got a new request');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

