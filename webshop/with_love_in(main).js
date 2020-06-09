var openaside=0;
function asideopen(){
	var as=document.getElementById('main_bar');
	if (openaside==0)
	{
		as.style.display='flex';
		openaside=1;
	}
	else
	{
		as.style.display='none';
		openaside=0;
	}
}