var s = document.getElementById("svg_id");
var clr = document.getElementById("clr");
var radius = 25;

var circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", radius);
    circle.setAttribute("stroke", "black");
    circle.addEventListener("click", colorChange);
    s.appendChild(circle);    
}

var colorChange = function(e) {
    //random color code from Gordon Lei
    var fillStyle = "#" + Math.floor((Math.random()*16777215)).toString(16);
    this.setAttribute("fill", fillStyle);
    this.addEventListener("click", removeCircle);
    e.stopPropagation();
}

var removeCircle = function() {
    s.removeChild(this);
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", Math.random()*s.getAttribute("width"));
    circle.setAttribute("cy", Math.random()*s.getAttribute("height"));
    circle.setAttribute("r", radius);
    circle.setAttribute("stroke", "black");
    circle.addEventListener("click", colorChange);
    s.appendChild(circle);    

}

var clear = function(){
    while(s.hasChildNodes()){
	s.removeChild(s.lastChild);
    }
}

clr.addEventListener("click", clear);
s.addEventListener("click", circle);
