<?php
	
	set_time_limit(0);
	for($i=0;$i<100;$i++){
	$file=fopen("scores.txt","w");
	$str=rand(0,100).";".rand(200,300).";".rand(300,400);
	fwrite($file,$str);
	fclose($file);
	sleep(6);
	
	}


?>  