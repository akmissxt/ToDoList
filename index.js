'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//模板引擎
app.set('views', 'public/pages');
app.set('view engine', 'ejs');

//静态资源
app.use(express.static('./public'));

//请求体解析
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Index')
})

let toDoController = require('./controller/toDoController')(app);

app.listen(8888, () => {
    console.log('listening port of 8888');
});

