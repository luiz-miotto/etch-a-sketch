
var x = 16;
let defaultSquareValue = x*x;

var squaresPerSide = document.getElementById("squaresPerSide");

squaresPerSide.addEventListener("click", ()=>{
var customAmount = prompt("How many squares would you like per side?", 16);
var defaultSquareValue = customAmount * customAmount;
console.log(`customAmount is equal to ${customAmount}. defaultSquareValue is ${defaultSquareValue}`);


return needDivs;
});
 
var ids = Array.from(Array(defaultSquareValue).keys());

var needDivs = divGenerator();

function divGenerator(){ids.forEach(function(e){
     document.getElementById("container").innerHTML += `
        <div class="divClass" id=${e}>
            
        </div>
     `;


 });
}
 const getId2 = document.querySelectorAll(".divClass");

 getId2.forEach(thiscanbewhatever => thiscanbewhatever.addEventListener("mouseover", ()=>
 { console.log(thiscanbewhatever.id);
document.getElementById(thiscanbewhatever.id).style.backgroundColor = "red";
}));





