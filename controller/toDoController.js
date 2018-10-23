
module.exports = function(app){

    //获取
    app.get('/todo', (req, res) => {
        res.render('form');
    })

    //添加
    app.post('/todo', (req, res) => {

    })

    //删除
    app.delete('/todo', (req, res) => {

    })

}