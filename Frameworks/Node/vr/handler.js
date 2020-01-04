function start(){
	
	console.log("start was called");
	return ("Hello Start")
}

function upload(){
	
	console.log("upload was called");
	return ("Hello Upload")
	
}
exports.start=start
exports.upload=upload