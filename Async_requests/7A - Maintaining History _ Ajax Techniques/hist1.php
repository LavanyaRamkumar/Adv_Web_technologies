<?php
	extract($_GET);
	$ret=array();
	if($ip=="beatles"){
		$ret["lead"]="John Lennon";
		$ret["latest"]="Yellow Submarine";
		$ret["year"]="1960";
	
	}
	elseif($ip=="one direction"){
		$ret["lead"]="Harry Styles";
		$ret["latest"]="Midnight Memories";
		$ret["year"]="2013";
	
	} 
	elseif($ip=="coldplay"){
		$ret["lead"]="Chris Martin";
		$ret["latest"]="Atlas";
		$ret["year"]="2010";
	}
	elseif($ip=="backstreet"){
	
		$ret["lead"]="Kevin Richardson";
		$ret["latest"]="Unbreakable";
		$ret["year"]="1990";
	}
	echo json_encode($ret);
	





?>