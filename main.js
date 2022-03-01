
/*
/*const mod = require("./side");
console.log(mod());*/
//os module
/*const os = require("os");
const user = os.userInfo();

const uptime = os.uptime();
console.log(uptime);*/
//console.log(os);

//path
/*
const path = require("path")
console.log(path.sep);

console.log(path.join(__dirname,"newhtml.html"));

//fs
const {readFileSync, writeFileSync} = require("fs");
const {readFile, writeFile} = require("fs");

console.log("start");
const fileread = readFileSync(path.join(__dirname,"newhtml.html"),"utf8");
console.log("On process");
console.log(fileread);
console.log("end");

console.log("start");
readFile(path.join(__dirname,"newhtml.html"),"utf8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }console.log("On process");
    
    console.log(result);
    return;
});


console.log("end");
 
 */

const http = require("http");
const path = require("path");
const {readFileSync} = require("fs");
const server = http.createServer((req,res)=>{
    const url = req.url;
    const filepath = path.join(__dirname,url);
     console.log(url);
        console.log(filepath);
    const reg = "^/[a-zA-Z]+.[a-zA-Z]+";
   // const reg = "/newhtml.html";
    if(url.match(reg)){
        
        const result = readFileSync(filepath,"utf-8");
        res.end(result);
    }
    else{
   res.end("could not load page");
    }
}).listen(3000);

const fs = require("express");