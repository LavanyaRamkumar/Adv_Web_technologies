function route(handle,pathname,response,request){
	console.log(handle[pathname],postData)
	if(typeof handle[pathname]==='function')
	{ return handle[pathname](response,request)
	console.log("Now routing"+pathname);}
	else{
		console.log("404 file not found")
		return("404 file not found")
	}

}
exports.route=route;