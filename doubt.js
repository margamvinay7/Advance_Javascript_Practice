// hi=1234
// const vinay=((num)=>{

//     return (newone)=>{
//         console.log(num,newone)
//     }
    
// })(hi)("hi vinay")

let name={
    firstname:"Margam",
    lastname:"vinay"
}

let printName= function (hometown,state,country){
    console.log(this.firstname+ " "+this.lastname+" "+hometown+" "+state);
}

let printMyName=printName.bind(name,"ibrahimpatnam");
printMyName("telangana","india")

Function.prototype.mybind=function(...args){
    let obj=this,
    params=args.slice(1);
    console.log(obj)
    return function (...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let printMyName2=printName.mybind(name,"ibrahimpatnam");
console.log(printMyName2)
printMyName("telangana","india")
