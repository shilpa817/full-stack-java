let list=[];

function addNode(){

let value=document.getElementById("nodeValue").value;

if(value===""){
alert("Enter value");
return;
}

list.push(value);

displayList();

document.getElementById("nodeValue").value="";
}

function displayList(){

let container=document.getElementById("listContainer");

container.innerHTML="";

list.forEach(function(item,index){

let node=document.createElement("div");

node.className="node";

node.innerText=item;

container.appendChild(node);

if(index<list.length-1){

let arrow=document.createElement("span");

arrow.className="arrow";

arrow.innerText="→";

container.appendChild(arrow);

}

});

}