var fs=require("fs");
var formidable=require("formidable");
function start(response){
	
	var body = '<html>'+
		 '<head>'+
		 '<meta http-equiv="Content-Type" '+
		 'content="text/html; charset=UTF-8" />'+
		 '</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" '+
		'method="post">'+
		'<input type="file" name="upload">'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();	

}

function upload(response,request){
	
	console.log("Request handler 'upload' was called.");

 var form = new formidable.IncomingForm();
 console.log("about to parse");
 console.log(request)
 form.parse(request, function(error, fields, files) {
 console.log("parsing done");
 /* Possible error on Windows systems:tried to rename to an already existing file */
 console.log(files);
 fs.rename(files.upload.path, "/tmp/test.jpg", function(error) {
 if (error) {
 fs.unlink("/tmp/test.jpg");
 fs.rename(files.upload.path, "/tmp/test.jpg");
	
	/*console.log("upload was called");
	response.writeHead(200,{"Content-type":"text/plain"})
	response.write("You enetered"+postData);
	//querystring.parse(postData).text
	response.end();
	//return ("Hello Upload")*/
	
}
 }
) })
}
function show(response) {
 console.log("Request handler 'show' was called.");
response.writeHead(200, {"Content-Type": "image/png"});
 fs.createReadStream("/tmp/test.jpg").pipe(response);
 }
exports.start=start
exports.upload=upload
exports.show=show;