<?php
	extract($_GET);
	
	$datarr=array("srn"=>$srn,"gpa"=>$gpa);
	$data=http_build_query($datarr);
	
	$header=array("Content-type:application/x-www-form-urlencoded");
	
	$req=array("http"=>array(
					"method"=>"PUT",
					"header"=>$header,
					"content"=>$data	
	
	));
	$context=stream_context_create($req);
	$retval=file_get_contents("http://localhost/wsf/student/update",false,$context);
	echo $retval;





?>