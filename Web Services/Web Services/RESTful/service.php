<?php

$res=array();
if($_SERVER["REQUEST_METHOD"]=="GET"){
	extract($_GET);
	
	if($srn=='001'){
		$res["status"]=200;
		$res["message"]="sucess";
		$res["data"]="9.9";	
	}
	else{
		$res["status"]=200;
		$res["message"]="failure";
		$res["data"]=null;	
		
	}
}
else if($_SERVER["REQUEST_METHOD"]=="PUT"){
	
		$params=file_get_contents("php://input");
		$arr=explode("&",$params);
		$srnarr=explode("=",$arr[0]);
		$srn=$srnarr[1];
		$gpaarr=explode("=",$arr[1]);
		$gpa=$gpaarr[1];
		$file=fopen("data.txt","w");
		$data=$srn.":".$gpa;
		fwrite($file,$data);
		fclose($file);
		$res["status"]=200;
		$res["message"]="updated";
		$res["data"]=null;
	
	  
}
	echo json_encode($res);



?>