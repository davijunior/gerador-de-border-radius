document.getElementById("input-top-left").value = 0;
document.getElementById("input-top-right").value = 0;
document.getElementById("input-bottom-left").value = 0;
document.getElementById("input-bottom-right").value = 0;
function changeBorder(){
	var main = document.getElementById("copy-paste");
	var tl = document.getElementById("input-top-left").value;
	var tr = document.getElementById("input-top-right").value;
	var bl = document.getElementById("input-bottom-left").value;
	var br = document.getElementById("input-bottom-right").value;
	var codigo = document.getElementById("codigo");

	main.style.borderTopLeftRadius = `${tl}px`;
	main.style.borderTopRightRadius = `${tr}px`;
	main.style.borderBottomLeftRadius = `${bl}px`;
	main.style.borderBottomRightRadius = `${br}px`;

	var str = `<p>border-top-left-radius: ${tl}px;</p><p>border-top-right-radius: ${tr}px;</p><p>border-bottom-left-radius: ${bl}px;</p><p>border-bottom-right-radius: ${br}px;</p>`;
	codigo.innerHTML = str;
}