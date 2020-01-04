
var fs=require("fs");
function start(response){
	
	var body = '<html>'+
				 '<head>'+
				 '<meta http-equiv="Content-Type" content="text/html; '+
				 'charset=UTF-8" />'+
				 '</head>'+
				 '<body>'+
				 '<form action="/upload" method="post">'+
				 '<textarea name="text" rows="20" cols="60"></textarea>'+
				 '<input type="submit" value="Submit text" />'+
				 '</form>'+
				 '</body>'+
				 '</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();	

}

function upload(response,postData){
	
	console.log("upload was called");
	response.writeHead(200,{"Content-type":"text/plain"})
	response.write("You enetered"+postData);
	//querystring.parse(postData).text
	response.end();
	//return ("Hello Upload")
	
}
function show(response) {
 console.log("Request handler 'show' was called.");
response.writeHead(200, {"Content-Type": "image/png"});
 fs.createReadStream("/tmp/web.jpg").pipe(response);
 }
exports.start=start
exports.upload=upload
exports.show=show;