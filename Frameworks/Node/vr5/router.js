function route(handle,pathname,response,postData){
	console.log(handle[pathname],postData)
	if(typeof handle[pathname]==='function')
	{ return handle[pathname](response,postData)
	console.log("Now routing"+pathname);}
	else{
		console.log("404 file not found")
		return("404 file not found")
	}

}
exports.route=route;