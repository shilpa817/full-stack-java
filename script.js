// const toggle = document.createElement("button");
// toggle.innerText = "🌙";
// toggle.style.position = "absolute";
// toggle.style.right = "20px";
// toggle.style.top = "20px";
// toggle.style.padding = "8px";
// toggle.style.cursor = "pointer";

// document.body.appendChild(toggle);

// toggle.addEventListener("click", ()=> {
//     document.body.classList.toggle("dark-mode");
// });

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// anchor.addEventListener("click",function(e){
// e.preventDefault();
// documentquerySelector(this.getAttribute("href")).scrollIntoView({
//     behavior:"smooth"
// })
// })
// })
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")){
    toggle.textContent = "☀️";
}
else{
    toggle.textContent = "🌙";
}


});