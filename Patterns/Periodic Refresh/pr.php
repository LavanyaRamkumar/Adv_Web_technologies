<?php
	sleep(10);
	$file=fopen("scores.txt","r");
	$data=trim(fgets($file));
	fclose($file);
	echo $data;
?>