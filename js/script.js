var element = document.getElementById("div1");
element.style.backgroundColor = "blue";
element.style.width = "200px";

var newElement = document.createElement("div");
element.appendChild(newElement);
newElement.style.backgroundColor = "black";
newElement.style.width = "50px";
newElement.style.height = "50px";

var newElement2 = document.createElement("div")
document.body.appendChild(newElement2);
newElement2.style.backgroundColor = "green";
newElement2.style.width = "300px";
newElement2.style.height = "300px";
newElement2.style.borderRadius = "250px";
newElement2.innerHTML = 'Cercle vert';
newElement2.style.color = "white";
newElement2.style.textAlign = "center";
newElement2.style.paddingTop = "25px";
newElement2.addEventListener("click", function (){
    newElement2.style.width = "500px"
    newElement2.style.height = "500px"
});

var link = document.getElementById('colorlink')
link.addEventListener("click", function (){
    element.style.backgroundColor = "red";
    newElement.style.backgroundColor = "yellow";
    newElement2.style.backgroundColor = "orange";

});
