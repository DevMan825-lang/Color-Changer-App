
var input = document.getElementById("box");
var headings = document.querySelectorAll("h3"); 
var str = " "; 
var arr = Array.from(headings); 
arr.forEach(function(myFunc){
myFunc.addEventListener("click", function(event){
    str = event.target.innerHTML; 
    input.value = str; 
    }); 
}); 
function mybtn(){
  var myColor = document.getElementById("box").value; 
  document.getElementById("document").style.backgroundColor = myColor; 
  document.getElementById("document").style.transition = "2s ease"; 
  document.getElementById("box").style.display = "none"; 
  document.getElementById("btn").style.display = "none"; 
  document.querySelector("h1").style.display = "none"; 
  document.getElementById("document").style.backgroundColor = str; 
  setInterval(display,5000); 
function display(){
  alert("After 10 seconds the page will be refresh automatically"); 
  location.reload(); 
}
  }
  document.getElementById("box").onclick = function(){
    document.getElementById("child1").style.visibility = "visible"; 
   }
  function myFunction(){
  document.getElementById("child1").style.visibility = "hidden";
  document.getElementById("mybtn").style.visibility = "hidden";
  }