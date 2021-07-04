const path = require('path')
const express = require('express')
const fs = require('fs')
const { createBundleRenderer,createRenderer } = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file)
const templatePath = resolve('./index.template.html')
const app = express()
var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'linyuan'
    });
    connection.connect();
function query(callBack){
    
// const renderer = require('vue-server-renderer').createRenderer({
//     template: require('fs').readFileSync('./index.template.html','utf8')
// })
connection.query("SELECT * from runoob_tbl", function (error, results, fields) {
    if (error) throw error;
    callBack(results,fields,function(){
        connection.end()
    })
  });
}
function bundleRender(bundle, options){
    return createRenderer({
      template:options.template
    })
  }
function createRenderer_(bundle,options){
    return createBundleRenderer(bundle,Object.assign(options,{
        basedir:resolve('./build/dist'),
        runInNewContext: false
    }))
}
const template = fs.readFileSync(templatePath,'utf-8')
const bundle = require('./build/dist/vue-ssr-server-bundle.json')
const clientManifest = require('./build/dist/vue-ssr-client-manifest.json')
const renderer = createRenderer_(bundle,{template,clientManifest})
const serve = (path, cache) => express.static(resolve(path), {
    maxAge:  0
  })
  app.use('/app.js', serve('./build/dist/app.js', true))
app.get('*',(req,res)=>{
    res.setHeader("Content-Type", "text/html")
    const context = {
        url:req.url,
        title:'linyuan',
        query:query,
        state:[1,5,8,9,3,6,7,5],
        meta: `
        <meta charset="utf-8">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        `
    }
    function callBack(results,fields,cb){
        renderer .renderToString(context,(err,html)=>{
            res.send(html)
        })
    }
    query(callBack)
    
    
})
app.listen(8000)