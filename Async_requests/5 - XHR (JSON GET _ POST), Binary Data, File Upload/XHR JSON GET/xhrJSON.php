<?php
	extract($_GET);
	if($mname!='Black Panther'){
		
		$arr=array('error'=>'Movie not found');
	}
	else{
		
		$arr=array('lead'=>'Chadwick Boseman','year'=>'2018','genre'=>'Action');
		
	}
	//json_encode — Returns the JSON representation of a value
	echo json_encode($arr);




?>