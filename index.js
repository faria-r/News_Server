const express = require('express')
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');
const categories = require('./Data/Categories.json')

app.get('/',(req,res)=>{
    res.send('news Api Running');

});
app.use(cors());
app.get('/news-categoris',(req,res)=>{
    res.send(categories)
})
app.listen(port,()=>console.log('dragon news server running',port))