<?php
	extract($_GET);
	if($time){	
		//code for checking if text changed
		$last=$time;	
	}
	else{
		$last=null;
	}
	
	$file=fopen("data.txt","r");
	while(true){
		clearstatcache();
		$new=filemtime("data.txt");
		if($new>$last){
			$ret=fread($file,filesize("data.txt")).";".$new;
			echo $ret;
			break;
			
		}
		else{
			sleep(5);
			continue;
		}
		
		
	}





?>