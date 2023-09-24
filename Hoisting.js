const initApp=()=>{


stepOne();
}
//it document supports in browser only
//initApp called when the domcontentLoaded i.e like if addeventlistener for click when we click that then only it called
//same like addeventlistener when domcontentLoaded i.e when entire script initialize then initApp called
document.addEventListener('DOMContentLoaded',initApp)
console.log("stepone ok",stepOne())
  stepOne=()=>{
    console.log("in stepone")
    return "hello"
}

//var able hositing it gives undefined
console.log(x)

var x=5;

//let and const not support hoisting it throws error
console.log(a)

let a=5;