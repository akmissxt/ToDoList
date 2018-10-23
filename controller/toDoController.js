'use strict'
//fake data
// var data = [{item: 'take a shower'}, {item: 'buy some food'}];
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist', {useNewUrlParser:true});

var itemSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo', itemSchema);

module.exports = function(app){
    
    //获取
    app.get('/todo', (req, res) => {
        //查询集合数据
        Todo.find( (err, data) => {
            if(err) res.sendStaus(500);
            res.render('form', {data: data});
        })
    })

    //添加
    app.post('/todo', (req, res) => {
        //获取数据
        let param = req.body;
        Todo(param).save( (err) => {
            if(err) res.sendStatus(500);
        });
        res.end();
    })

    //删除
    app.delete('/todo/:item', (req, res) => {
        let param = req.params.item;
        // param = param.replace(/-/g,' ');
        console.log(param);
        //待添加id字段
        Todo.findByIdAndDelete(param, (err, data) => {
            if(err) res.sendStatus(500);
        });
        res.end();
    })

}