



 
 
const ids = Array.from(Array(256).keys());

 ids.forEach(function(e){
     document.getElementById("container").innerHTML += `
        <div class="divClass" id=${e}>
            
        </div>
     `;


 });



 let changeColor = document.getElementById("255");

 changeColor.addEventListener("mouseover", () => {
    //console.log(`the id is ${e}`);
     document.getElementById("255").style.backgroundColor= "red";
 });


 /*const changeColor = document.querySelector("255")

 changeColor.addEventListener("mouseover", () => {
    //console.log(`the id is ${e}`);
     document.getElementById("255").style.backgroundColor= "red";
 });

*/
/*
let getId = document.getElementsByClassName("divClass")

 getId.addEventListener("mouseover",()=>{
     document.getElementById().style.backgroundColor="red";
     
 });
*/
 /*
  changeColor.addEventListener("mouseover", function(e){
    //console.log(`the id is ${e}`);
     document.getElementById(e).style.backgroundColor= "red";
 });

 */   


/*



ids.forEach(function(e){
  var changeColor = document.getElementById(e);
});

 const newColor = document.querySelectorAll
 let changeColor = document.getElementByClass("divClass");

document.getElementById()
 
 changeColor.addEventListener("mouseover", () => {
    //console.log(`the id is ${e}`);
     document.getElementById("255").style.backgroundColor= "red";
 });

 ids.forEach(function(e){
     document.getElementById(`${e}`).style

     
 const colorChange = document.querySelector()

 var div = document.createElement('div');
 var divider = document.querySelector('div');
 divider.style.cssText = 'color:blue; background: red;';
 divider.textContent = "Testing please";
*/