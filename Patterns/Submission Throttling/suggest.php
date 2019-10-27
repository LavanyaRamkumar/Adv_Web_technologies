<?php
	extract($_GET);
	$res=array();
	$file=fopen("food.txt","r");
	while(!feof($file)){
		$line=trim(fgets($file));
		if(strncasecmp($line,$term,strlen($term))==0){
			$res[]=$line;	
		}	
	}
	echo json_encode($res);

	
?>
	
	