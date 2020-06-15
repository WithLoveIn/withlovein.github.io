<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>With Love in</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="with_love_in(main).css">
	<link rel="shortcut icon" href="img/box.png" type="image/x-icon">
	<script src="with_love_in(main).js"></script>
</head>
<body  class="scrollbar scrollbar-secondary">
	<div class="wrapper">
		<!---------------------------- HEADER ------------------------------>
		<?php include('header.php'); ?>
		<!------------------------------------------------------------------>
		
		<!------------------------------ MAIN ------------------------------>
		<main id="main">
			<!------------------------------ ASIDE BAR --------------------->
			<?php include('aside_bar.php') ?>
			<!-------------------------------------------------------------->
			<!----------------------------- CONTENT ------------------------>
			<?php include('main_content.php') ?>
			<!-------------------------------------------------------------->
		</main>
		<!------------------------------------------------------------------>

		<!----------------------------- FOOTER ----------------------------->
		<?php include('footer.php') ?>
		<!------------------------------------------------------------------>
	</div>

	<!------------------------------ MODAL WINDOWS ------------------------->
	<?php include('modal_window.php') ?>
	<!---------------------------------------------------------------------->

	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>