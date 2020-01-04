var exec = require("child_process").exec;
function start(response){
	
	function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);
	var content = "empty";
	exec("dir", function (error, stdout, stderr) {
		content = stdout;
		response.writeHead(200,{"Content-type":"text/plain"})
		response.write(content)
		response.end();
		console.log(content)
	
		});

	//return content;
	//console.log("start was called");
	//return ("Hello Start")
}

function upload(response){
	
	console.log("upload was called");
	response.writeHead(200,{"Content-type":"text/plain"})
	response.write("Hello Upload")
	response.end();
	//return ("Hello Upload")
	
}
exports.start=start
exports.upload=upload