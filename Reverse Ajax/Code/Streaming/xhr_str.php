<?php
	ob_start();
	ob_flush();
	flush();
	$file=fopen("data.txt","r");
	$oldtime=filemtime("data.txt");
	while(true){
		clearstatcache();
		$newtime=filemtime("data.txt");
		if($newtime>$oldtime){
			$data=fread($file,filesize("data.txt"));
			$oldtime=$newtime;
			echo $data."Change at".date('H i s', $newtime);
			ob_flush();
			flush();
			
		}
		sleep(5);
		
		
		
		
	}




?>