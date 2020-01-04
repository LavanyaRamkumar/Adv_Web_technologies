var exec = require("child_process").exec;
function start(){
	
	/*function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);*/
	var content = "empty";
	exec("dir", function (error, stdout, stderr) {
		
	content = stdout;
	console.log(content)
		});

	return content;
	/*console.log("start was called");
	return ("Hello Start")*/
}

function upload(){
	
	console.log("upload was called");
	return ("Hello Upload")
	
}
exports.start=start
exports.upload=upload