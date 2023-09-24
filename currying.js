// const buildSandwich=(ingredient1)=>{
//     return (ingredient2)=>{
//         return (ingredient3)=>{
//             return `${ingredient1},${ingredient2},${ingredient3}`
//         }
//     }
// }

// const mysandwich=buildSandwich("bacon")("lettuce")("tamato")
// console.log(mysandwich)


//curried version
//In simple or efficient form
const buildSandwich=in1=>in2=>in3=>
`${in1},${in2},${in3}`;

const mysandwich=buildSandwich("bacon")("lettuce")("tamato")
 console.log(mysandwich)

 //example2
 const curriedmultiply=x=>y=>x*y;
 console.log(curriedmultiply(2)(5))

 const giveANumToMulBy2=curriedmultiply(2)
 console.log(giveANumToMulBy2)
 console.log(giveANumToMulBy2(10))
