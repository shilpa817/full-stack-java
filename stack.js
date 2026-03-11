let stack = [];

function push(){

let value = document.getElementById("value").value;

if(value===""){
alert("Enter value");
return;
}

stack.push(value);

displayStack();

document.getElementById("value").value="";
}

function pop(){

if(stack.length===0){
alert("Stack empty");
return;
}

stack.pop();

displayStack();
}

function displayStack(){

let container=document.getElementById("stackContainer");

container.innerHTML="";

stack.forEach(function(item){

let box=document.createElement("div");

box.className="stack-box";

box.innerText=item;

container.appendChild(box);

});

}