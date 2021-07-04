
const server = require('express')()
server.get('*',(req,res)=>{
    console.log(req.url,'--------------------------8888')
    res.setHeader('Access-Control-Allow-Origin','*')
    var data = [
        1,2,3,4,5,6,'服务端数据'
    ]
    var json = JSON.stringify(data)
    res.end(json)
})
server.listen(8888)