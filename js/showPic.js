function showPic(whichpic){
	var source = whichpic.getAttribute('href');
	var placeHolder = document.getElementById('placeholder');
	placeHolder.setAttribute('src',source);
	var text = whichpic.getAttribute('title');
	var des = document.getElementById('description');
	des.firstChild.nodeValue = text;
}