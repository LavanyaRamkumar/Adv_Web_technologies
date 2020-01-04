<?php
	$file = fopen("data.txt","r");
	$datastring = fread($file, filesize("comp.txt"));
	
	//zip the contents before sending. 9 is max compression.
	$output = gzdeflate($datastring,9);
	
	echo $output;



?>