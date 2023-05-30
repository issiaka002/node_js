const express = require("express");
const app=express();

app.get("/", (req, resp)=>{
      resp.setHeader("content-type", "text/html");
      resp.send("<h1>Hello world </h1>");
});
app.get("/books/:code", (req,resp)=>{
      resp.setHeader("content-type", "application/json");
      var infos={
            name:"yao",
            prenom:"armela",
            email:"yao120@gmail.com",
            code:req.params.code
      };
      resp.send(JSON.stringify(infos));
})

app.listen(8083, ()=>{
      console.log("Node server started...")
})