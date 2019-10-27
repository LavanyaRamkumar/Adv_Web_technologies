<?php

	header('Content-type:video/mp4');
	$file = fopen("VENOM.mp4", "rb");
	$f=fread($file,filesize("VENOM.mp4"));
	echo $f;
	//Will this approach work for buffering? 
	/*while(!feof($file))
	{$f=fread($file,filesize("VENOM.mp4")/3);
		echo($f);
		sleep(2);

	}*/
	fclose($file);
?>