function changeBorder(){
	var main = document.getElementById("copy-paste");
	var tl = document.getElementById("input-top-left").value;
	var tr = document.getElementById("input-top-right").value;
	var bl = document.getElementById("input-bottom-left").value;
	var br = document.getElementById("input-bottom-right").value;

	main.style.borderTopLeftRadius = `${tl}px`;
	main.style.borderTopRightRadius = `${tr}px`;
	main.style.borderBottomLeftRadius = `${bl}px`;
	main.style.borderBottomRightRadius = `${br}px`;
}