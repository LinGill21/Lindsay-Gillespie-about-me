const inputName = document.querySelector("#fname")
const inputFood =document.querySelector("#food")
const inputAnimal =document.querySelector("#animal")
const btnCombine = document.getElementById("combine")
const mergeHold = document.getElementById("merg")

window.addEventListener('load', (event) => {
    // if (localStorage.getItem('name')) {
    //     document.querySelector('#fname').value = localStorage.getItem('name')
    // }
    document.querySelector("#fname").innerHTML = localStorage.getItem('name'); 
    localStorage.setItem('name', inputName);
})
  
//gerneral call to functions and returning
btnCombine.onclick = function(){
    const name =inputName.value;
    console.log(name);
    const food =inputFood.value;
    var foodlower =food.toLowerCase();
    console.log(food);
    const animal=inputAnimal.value;
    var animallower = animal.toLowerCase()
    mergeHold.innerHTML = localStorage.getItem('name')+ " your new favorite animal is "+ foodlower+animallower;
}
//https://www.w3schools.com/jsref/jsref_tolowercase.asp for lowercase the second input
