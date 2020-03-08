document.getElementById("input-top-left").value = 0;
document.getElementById("input-top-right").value = 0;
document.getElementById("input-bottom-left").value = 0;
document.getElementById("input-bottom-right").value = 0;
document.getElementById("input-top-left-x").value = 0;
document.getElementById("input-top-right-x").value = 0;
document.getElementById("input-bottom-left-x").value = 0;
document.getElementById("input-bottom-right-x").value = 0;

function changeBorder(){
	var main = document.getElementById("copy-paste");
	var tl = document.getElementById("input-top-left").value;
	var tr = document.getElementById("input-top-right").value;
	var bl = document.getElementById("input-bottom-left").value;
	var br = document.getElementById("input-bottom-right").value;
	var tl_x = document.getElementById("input-top-left-x").value;
	var tr_x = document.getElementById("input-top-right-x").value;
	var bl_x = document.getElementById("input-bottom-left-x").value;
	var br_x = document.getElementById("input-bottom-right-x").value;
	var codigo = document.getElementById("codigo");

	main.style.borderTopLeftRadius = `${tl_x}px ${tl}px`;
	main.style.borderTopRightRadius = `${tr_x}px ${tr}px`;
	main.style.borderBottomLeftRadius = `${bl_x}px ${bl}px`;
	main.style.borderBottomRightRadius = `${br_x}px ${br}px`;

	var str = `<p>border-top-left-radius: ${tl_x}px ${tl}px;</p><p>border-top-right-radius: ${tr_x}px ${tr}px;</p><p>border-bottom-left-radius: ${bl_x}px ${bl}px;</p><p>border-bottom-right-radius: ${br_x}px ${br}px;</p>`;
	codigo.innerHTML = str;
}