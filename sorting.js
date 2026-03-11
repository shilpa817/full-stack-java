function sortNumbers(){

let input = document.getElementById("numbers").value;

let arr = input.split(",").map(Number);

let algorithm = document.getElementById("algorithm").value;

if(algorithm === "bubble"){
bubbleSort(arr);
}

else if(algorithm === "selection"){
selectionSort(arr);
}

else if(algorithm === "insertion"){
insertionSort(arr);
}

document.getElementById("result").innerText =
"Sorted Array: " + arr.join(", ");

}



function bubbleSort(arr){

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length-i-1;j++){

if(arr[j] > arr[j+1]){

let temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;

}

}

}

}



function selectionSort(arr){

for(let i=0;i<arr.length;i++){

let minIndex = i;

for(let j=i+1;j<arr.length;j++){

if(arr[j] < arr[minIndex]){
minIndex = j;
}

}

let temp = arr[i];
arr[i] = arr[minIndex];
arr[minIndex] = temp;

}

}



function insertionSort(arr){

for(let i=1;i<arr.length;i++){

let key = arr[i];
let j = i-1;

while(j>=0 && arr[j] > key){

arr[j+1] = arr[j];
j--;

}

arr[j+1] = key;

}

}