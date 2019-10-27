<?php
	header("Content-type:text/xml");
	
	$retstr = file_get_contents("http://127.0.0.1/feeds.xml");
	
	echo $retstr;
	

?>