let os = require("os");
// console.log(os.hostname());

// const http = require("http");
// const port = 8000;

// http.createServer((req,res) =>{
//     res.writeHeader(200,{"Content-Type":"application/json"})
    
//     let data=[{
//         user:"Najarajan"
//     },{
//         user:"Goutam"
//     },{
//         user:"Sumanth"
//     },{
//         user:"Punith",
//         class:"10"
//     }];
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(port,() =>{
//     console.log("Listening to ",port);
// })

const http = require("http");
const port = 8000;
const fs = require("fs");
let folder = new Date().toDateString(),
datetime = new Date().toString();

http.createServer((req,res) => {

    res.writeHeader(200,{"Content-Type":"text/html"});

    fs.writeFileSync(`${folder}.txt`,datetime);
    fs.readFile(`${folder}.txt`, (err,data)=>{
        res.write(data);
        res.end();
    })

}).listen(port, () => {
    console.log("Listening to ",port);
})