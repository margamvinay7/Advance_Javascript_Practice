let name={
    firstname:"Margam",
    lastname:"vinay"
}

let printFullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" "+state)

}

printFullName.call(name,"ibrahimpatnam","telangana")

let name2={
    firstname:"Margam",
    lastname:"lavisha"
}

printFullName.call(name2,"mumbai","maharastra");

printFullName.apply(name2,["mumbai","maharastra"]);

 let printMyName=printFullName.bind(name2,"mumbai","maharastra");
console.log(printMyName);
