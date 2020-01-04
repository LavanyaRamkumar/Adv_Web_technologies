var http=require('http');
var url=require('url');

function start(route,handle){
	function onRequest(request,response){
		response.writeHead(200,{"Content-type":"text/html"})
		//response.write("Hello World")
		var pathname=url.parse(request.url).pathname;
		console.log("request received for"+pathname);
		console.log(handle);
		var content=route(handle,pathname);
		response.write(content);	
		response.end();	
	}
	http.createServer(onRequest).listen(8888)	
}
exports.start=start;