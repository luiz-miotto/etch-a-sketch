



 
 
const ids = Array.from(Array(256).keys());

 ids.forEach(function(e){
     document.getElementById("container").innerHTML += `
        <div class="divClass" id=${e}>
            
        </div>
     `;
 let changeColor = document.getElementById(e);

 
 changeColor.addEventListener("mouseover", () => {
    console.log(`the id is ${e}`);
    return document.getElementById(e).style.color.red;

});

 
 
 /*changeColor.addEventListener("mouseenter", (e) => {
     document.getElementById(e).style.color="red";

 });*/


 });

 /*ids.forEach(function(e){
     document.getElementById(`${e}`).style

     
 const colorChange = document.querySelector()
/*
 var div = document.createElement('div');
 var divider = document.querySelector('div');
 divider.style.cssText = 'color:blue; background: red;';
 divider.textContent = "Testing please";
*/