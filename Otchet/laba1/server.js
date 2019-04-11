const express = require("express");
const fs = require("fs");
//const jwt = require('jsonwebtoken');
var mammoth = require('mammoth')
const app = express();
let server = require("http").createServer(app);
let bodyparser = require("body-parser");

console.log(__dirname)

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true }));
app.use("/", express.static(__dirname + "/"));
app.use("/", express.static(__dirname + "/../"));
app.get("/labs", function(req,res){
    console.log("POBEDA")
    var test = fs.readdirSync(__dirname+"/../");
    console.log(test)
    res.json({labs:test})

});
console.log(__dirname+"/../")
// fs.readdirSync(__dirname)
// .forEach(data=>{
//     console.log(data.toString())
//     fs.readFile(data, function(err,info){
//         if(err){
//             console.log(err)
//         } else
//         console.log(info.toString())
//     })
// });


var test = fs.readdirSync(__dirname+"/../");
console.log(test)
app.get("/getCode", function(req,res){
    console.log(req.query)
     let path = __dirname+"/../"+req.query.lab+'/'+req.query.path;
     console.log(path)
     
     fs.readFile(path, function(err,info){
        if(err){
            console.log(err)
        } else{
        console.log(info.toString())
        res.json({code:info.toString()})
        }
    })


})
app.get('/hello', function(req,res){
    mammoth.convertToHtml({path: "zadanie.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        console.log(html)
        res.send(html)
        var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();
})
app.get('/module' , async function(req, res){
    console.log("Module");
    res.sendfile("Module.html");
})
app.get('/testt', function(req,res){
    console.log("proshollllllllllllllllllllll")
    res.sendfile("test.html");
})
app.get("/pathCode", function(req,res){
    console.log(req.query.lab)
    let path = __dirname+"/../"+req.query.lab+'/';
    console.log("1234112412")
    let bufer = fs.readdirSync(path);
    console.log(bufer)
    res.json({pathCode:bufer})
})
app.get("/zadanie", function(req,res){
    console.log(req.query)
    let path = __dirname+"/../"+req.query.lab+"/Zadanie.txt"
    console.log(path)
    fs.readFile(path, "utf8", function(err,info){
                if(err){
                    console.log(err)
                } else{
                console.log(info.toString())
                res.json({zadanie:info.toString()})
                }
            })
})

app.get('/laba', function(req, res){
    console.log(req.query.lab)
    var file = fs.readdirSync(__dirname)
    console.log(file)
    res.json({file:file})
        // .then(file => {
        //     console.log(file)
        //     res.json({file:file})
        //})
})

app.get('/home', function(req,res){
    console.log("hello")
    res.sendfile("index.html");
})
server.listen(8000);
console.log("Запуск сервера..");