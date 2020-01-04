<?php
	
	// Set up for SSE
	ob_start();
	
	header("Content-type: text/event-stream");
	
	$oldtime = filemtime("bchat.txt");
	
	while(true)
	{
		clearstatcache();
		$newtime = filemtime("bchat.txt");
		
		if($newtime != $oldtime)
		{
			//The file is modified. That means 'B' typed something.
			//Open and read the last line from the file.
			//Read the file into an array and return the last one
			$msgarr = file("bchat.txt");
			$latestmsg = array_pop($msgarr);
			
			//Send the event
			echo "event:chatmsg\n";
			echo "retry:100\n";
			echo "data: $latestmsg\n\n";
			ob_flush();
			flush();
			
			$oldtime = $newtime;
			$_SESSION["modtime"] = $newtime;
		}
		
		//We will check every 1 seconds
		sleep(1);
	}

?>