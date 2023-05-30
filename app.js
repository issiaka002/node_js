//..Creation d'un serveur http avec javscript
var http=require("http");
var url=require('url');
var querystring =require("querystring");

var httpServer=http.createServer(function(req, resp){
      //..
      query = url.parse(req.url).query;
      params = querystring.parse(query);
      console.log(url.parse(req.url).path);
      console.log(params);
      nom= params["nom"];
      resp.writeHead(200, {'content-type': 'text/html'});
      resp.end("<h1>Hello " + nom+ "</h1>");
})
httpServer.listen(8081, function(){
      console.log("Node server started...");
})