const express =require('express');
const path =require('path');
const bodyparser = require('body-parser')
const routes =require('./routes/index');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(path.resolve(), 'view)')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(path.resolve(), 'view/index.html'))
});

app.use('/',routes);
