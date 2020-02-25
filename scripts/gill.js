const inputName = document.querySelector("#fname")
const inputFood =document.querySelector("#food")
const inputAnimal =document.querySelector("#animal")
const btnCombine = document.getElementById("combine")
const mergeHold = document.getElementById("merg")
const btnNews = document.getElementById("newsSpot")
const newHold = document.getElementById("News")

const newsURL ='https://newsapiraygorodskijv1.p.rapidapi.com/getArticles'
window.addEventListener('load', (event) => {
    document.querySelector("#fname").innerHTML = localStorage.getItem('name'); 
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
    mergeHold.innerHTML = name + " your new favorite animal is "+ foodlower+animallower;
    localStorage.setItem('name',name)
}
//https://www.w3schools.com/jsref/jsref_tolowercase.asp for lowercase the second input


