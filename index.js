const app = require('./config/express');


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The server is running at localhost:${port}`);
})