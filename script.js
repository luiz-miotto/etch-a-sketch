



 
 
const ids = Array.from(Array(256).keys());

 ids.forEach(function(e){
     document.getElementById("container").innerHTML += `
        <div class="divClass" id=${e}>
            
        </div>
     `;


 });

 const getId2 = document.querySelectorAll(".divClass");

 getId2.forEach( thiscanbewhatever => thiscanbewhatever.addEventListener("mouseover", ()=>
 { console.log(thiscanbewhatever.id);
document.getElementById(thiscanbewhatever.id).style.backgroundColor = "red";
}));





/*
getId.addEventListener("mouseover", function(e){
alert(e.this.id)

});
*/
/*
 let changeColor = document.getElementById("255");

 changeColor.addEventListener("mouseover", () => {
    //console.log(`the id is ${e}`);
     document.getElementById("255").style.backgroundColor= "red";
 });
*/
 // NEED to write function that uses class on mouseover
 //to send the ID
 //then use that ID to change css color
 // google "how to get ID using class evenlistener javascript"

 //try this https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
 //https://stackoverflow.com/questions/20868907/javascript-get-element-id-from-event

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