var http=require('http');
var url=require('url');

function start(route,handle){
	function onRequest(request,response){
		//response.writeHead(200,{"Content-type":"text/html"})
		//response.write("Hello World")
		postData=""
		request.addListener("data", function(chunk) {
 			// called when a new chunk of data was received
			postData+=chunk;
 		});

 		request.addListener("end", function() {
 			// called when all chunks of data have been received
			route(handle,pathname,response,postData);
 			});
		var pathname=url.parse(request.url).pathname;
		console.log("request received for"+pathname);
		console.log(handle);
		//route(handle,pathname,response);
		//response.write(content);	
		//response.end();	
	}
	http.createServer(onRequest).listen(8888)	
}
exports.start=start;