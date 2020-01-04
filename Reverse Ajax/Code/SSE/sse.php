<?php
	header("Content-type:text/event-stream");
	ob_start();
	ob_flush();
	flush();
	$count=0;
	while(true){
		echo "event:msg\n";
		echo "data:<h2>Count is: $count</h2>\n\n";
		ob_flush();
		flush();
		sleep(2);
		$count++;	
	}
?>