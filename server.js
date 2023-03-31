// 1.http module

const http= require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server');

    //console.log(req.method);
   // console.log(req.url);
let path='./html';
switch(req.url){
    case '/':
        path+='/index.html'
        res.statusCode=200;
        break;
    case '/index.html':
        path+='/index.html'
        res.statusCode=200;
        break;
    //if you want to redirect 
    case '/message.html':
       res.setHeader('Location','/index')
       res.statusCode=301;
       break;
    //case '/message.html':
       //path+='/message.html'
       //res.statusCode=200;
       //break;
        default:
            path+='/menu.html'
            res.statusCode=404;
            break;
}
   res.setHeader('content-Type','text/html');
   //res.write('<h1>Hello<h1>');
   //res.write('<h1>Hello<h1>');
   //res.end();
   
   fs.readFile(path,(err,fileData)=>{
    if(err){
        console.log(err);
    }
    else{
        res.write(fileData);
        res.end();
    }
   })
}
);


//port number, host, callback function
server.listen(3000,'localhost',()=>{
console.log('server is listening on port 3000');
});
