function route(handle,pathname){
	console.log(handle[pathname])
	if(typeof handle[pathname]==='function')
	{ return handle[pathname]()
	console.log("Now routing"+pathname);}
	else{
		console.log("404 file not found")
		return("404 file not found")
	}

}
exports.route=route;