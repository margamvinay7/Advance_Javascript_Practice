// we can create a two types of objects that are
/* 1. object literals
    2.object constructor
    */

    // object literals

    let firstObject={
        name:'vinay',
        age:20,
        college:'Narasimha Reddy Engineering College'
    }

    console.log(firstObject,firstObject.name,firstObject.age,firstObject.college)



    // object constructor

    function person(name,age,college){
        this.name=name,
        this.age=age,
        this.college=college
    }

    let person1=new person('vinay',20,'Narasimha Reddy Engineering College')
    console.log(`the person1 object constructor `,person1)