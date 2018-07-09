var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var ol = document.getElementById("rgb");
function go(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	var a = body.style.background+";";
	console.log(a);
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(a));
	ol.appendChild(li);
}
color1.addEventListener("input",function(){
go();
});
color2.addEventListener("input",function(){
go();
});