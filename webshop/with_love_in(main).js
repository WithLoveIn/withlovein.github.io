var openaside=0;
function asideopen(){
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
		if (window.innerWidth>767){
			openaside=1;
			as.style.display='flex';
		}
		else{
			as.style.display='none';
			openaside=0;
		}
	}
	window.addEventListener('resize',eventHandler, false);
};

document.addEventListener('DOMContentLoaded',f,false);