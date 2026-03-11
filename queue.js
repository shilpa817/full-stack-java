let queue = [];
function enqueue(){
let value = document.getElementById("value").value;
if(value == " "){
alert("Please enter a value");
return;
}
queue.push(value);
document.getElementById("value").value = " ";
displayQueue();
}

function dequeue(){
if(queue.length === 0){
alert("Queue is empty");
return;
}
queue.shift();
displayQueue();
}
function displayQueue(){
let container = document.getElementById("queueContainer");
container.innerHTML = "";
queue.forEach(function(item){
Element.className = "queue-item";
Element.innerText = item;
container.appendChild(element);
});
}