const inputName = document.querySelector("#fname")
const inputFood =document.querySelector("#food")
const inputAnimal =document.querySelector("#animal")
const btnCombine = document.getElementById("combine")
const mergeHold = document.getElementById("merg")

  
//gerneral call to functions and returning
btnCombine.onclick = function(){
    console.log('INFO: Declaring functions');
    const name =inputName.value;
    console.log(name);
    const food =inputFood.value;
    var foodlower =food.toLowerCase();
    console.log(food);
    const animal=inputAnimal.value;
    var animallower = animal.toLowerCase()
    mergeHold.innerHTML = name + " your new favorite animal is "+ foodlower+animallower;
}
//https://www.w3schools.com/jsref/jsref_tolowercase.asp for lowercase the second input
