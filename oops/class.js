class vehicle {
    constructor(name,maker,engine){
        this.name=name,
        this.maker=maker,
        this.engine=engine
    }

    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}

let bike1=new vehicle('Hayabusa','Suzuki','1340cc')

// Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation. 

// Example: Let’s understand encapsulation with an example.


// // Encapsulation example
// class person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add) {
//         this.add = add;
//     }
//     getDetails() {
//         console.log(`Name is ${this.name},
//         Address is: ${this.add}`);
//     }
// }
 
// let person1 = new person('Mukul', 21);
// person1.add_Address('Delhi');
// person1.getDetails();