<?php
	extract($_POST);
	if($mname!='Black Panther'){
		
		$arr=array('error'=>'Movie not found');
	}
	else{
		
		$arr=array('lead'=>'Chadwick Boseman','year'=>'2018','genre'=>'Action');
		
	}
	echo json_encode($arr);




?>