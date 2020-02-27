const inputName = document.querySelector("#fname")
const inputFood =document.querySelector("#food")
const inputAnimal =document.querySelector("#animal")
const inputHours = document.querySelector("#hour")
const inputWage= document.querySelector("#wage")
const btnCombine = document.getElementById("combine")
const mergeHold = document.getElementById("merg")
const payHold = document.getElementById("pay")

const newsURL ='https://newsapiraygorodskijv1.p.rapidapi.com/getArticles'
window.addEventListener('load', (event) => {
    document.querySelector("#fname").innerHTML = localStorage.getItem('name'); 
})
const  salCal = function (numhour, wage)
{
    console.log(numhour,wage)
    if(numhour<0 || wage <0){
    return 0;
    }
    else{
    return (numhour * wage);
    }
    
}
  
//gerneral call to functions and returning
btnCombine.onclick = function(){
    const strhour = inputHours.value;
    const numhour = parseFloat(strhour);
    const strwage = inputWage.value;
    const numwage = parseFloat(strwage);
    const name =inputName.value;
    //food
    const food =inputFood.value;
    var foodlower =food.toLowerCase();
    //animal
    const animal=inputAnimal.value;
    var animallower = animal.toLowerCase()
    mergeHold.innerHTML = name + " your new favorite animal is "+ foodlower+animallower;
    localStorage.setItem('name',name)
    const paymonth =salCal(numhour,numwage)
    if (paymonth==0){
        payHold.innerHTML = name + " you have entered an incorrect number";
    }
    else{
        payHold.innerHTML = name + " your pay is "+ paymonth;
    }
}

//https://www.w3schools.com/jsref/jsref_tolowercase.asp for lowercase the second input


