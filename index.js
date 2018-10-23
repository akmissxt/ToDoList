'use strict'

const express = require('express');

const app = express();

let toDoController = require('./controller/toDoController')(app);

//模板引擎
app.set('views', 'public/pages');
app.set('view engine', 'ejs');
//静态资源
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('Index')
})

app.listen(8888, () => {
    console.log('listening port of 8888');
});

