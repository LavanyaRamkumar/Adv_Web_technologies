<html>
	<head>
		<style>
		</style>
		<script>
		<?php
	
			extract($_POST);
			if($srn=="SRN1"){
				$ret="SRN1;abc;9.8";
				echo "parent.displayDetails('$ret')";
				
			}
			elseif($srn=="SRN2"){
				$ret="SRN2;def;9.8";
				echo "parent.displayDetails('$ret')";
				
			}
			elseif($srn=="SRN3"){
				$ret="SRN3;xyz;9.8";
				echo "parent.displayDetails('$ret')";
				
			}
		?>
		</script>
	</head>
	<body>
	</body>
<html>	