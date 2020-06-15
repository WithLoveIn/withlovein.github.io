var openaside=0;
var opensearch=0;
function aside_open(){
	var as=document.getElementById('main_bar');
	if (openaside==0){
		as.style.display='flex';
		openaside=1;
	}else{
		as.style.display='none';
		openaside=0;
	}
}
var f=function(){
	var eventHandler =function (event){
		var as=document.getElementById('main_bar');
		var search=document.getElementsByClassName('header_nav_search')[0];
		var logo=document.getElementsByClassName('header_logo')[0];
		var icons=document.getElementsByClassName('header_nav_ul')[0];			var buttonl=document.getElementsByClassName('header_nav_button_search')[0];


		if (window.innerWidth>767){
			openaside=1;
			as.style.display='flex';

			document.getElementsByClassName('nav_first_row')[0].style.position = 'static';
			buttonl.style.minWidth = '35px';
			
			buttonl.style.borderRadius = '0 7px 7px 0';
			buttonl.style.marginLeft = 'auto';
			search.style.display = 'flex';
			logo.style.display='flex';
			icons.style.display='flex';

		}
		else{
			as.style.display='none';
			openaside=0;

			if (opensearch==1){
				document.getElementsByClassName('nav_first_row')[0].style.position = 'absolute';
				buttonl.style.width = '10vw';
				buttonl.style.borderRadius = '0 7px 7px 0';
				buttonl.style.marginLeft = '0';
				search.style.display = 'flex';
				search.style.width = '86vw';
				logo.style.display='none';
				icons.style.display='none';
			} else {
				document.getElementsByClassName('nav_first_row')[0].style.position = 'static';
				buttonl.style.minWidth = '35px';
				buttonl.style.borderRadius = '7px 7px 7px 7px';
				buttonl.style.marginLeft = 'auto';
				search.style.display = 'none';
				search.style.width = '86vw';
				logo.style.display='flex';
				icons.style.display='flex';

			}
		}
	}
	window.addEventListener('resize',eventHandler, false);
};
document.addEventListener('DOMContentLoaded',f,false);
function search_start(){
	if (window.innerWidth<=767){
		var search=document.getElementsByClassName('header_nav_search')[0];
		var logo=document.getElementsByClassName('header_logo')[0];
		var icons=document.getElementsByClassName('header_nav_ul')[0];
		var buttonl=document.getElementsByClassName('header_nav_button_search')[0];
		if (opensearch==0){
			opensearch=1;
			document.getElementsByClassName('nav_first_row')[0].style.position = 'absolute';
			buttonl.style.width = '10vw';
			buttonl.style.borderRadius = '0 7px 7px 0';
			buttonl.style.marginLeft = '0';
			search.style.display = 'flex';
			search.style.width = '86vw';
			logo.style.display='none';
			icons.style.display='none';
		} else {
			opensearch=0;
			document.getElementsByClassName('nav_first_row')[0].style.position = 'static';
			buttonl.style.minWidth = '35px';
			buttonl.style.borderRadius = '7px 7px 7px 7px';
			buttonl.style.marginLeft = 'auto';
			search.style.display = 'none';
			search.style.width = '86vw';
			logo.style.display='flex';
			icons.style.display='flex';

		}
	}
}
function modal_open(){
	document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}