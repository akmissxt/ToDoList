'use strict'
//fake data
var data = [{item: 'take a shower'}, {item: 'buy some food'}];

module.exports = function(app){
    
    //获取
    app.get('/todo', (req, res) => {
        res.render('form', {data: data});
    })

    //添加
    app.post('/todo', (req, res) => {
        //获取数据
        let param = req.body;
        // console.log(param);
        data.push({item: param.item});
        res.end();
    })

    //删除
    app.delete('/todo/:item', (req, res) => {
        let param = req.params.item;
        param = param.replace(/-/g,' ');
        // console.log(param);
        //待添加id字段
        for (let i = 0; i < data.length; i++) {
            if(data[i].item === param) {
                // console.log('find it');
                data.splice(i, 1);
                break;
            }
        }
        res.end();
    })

}