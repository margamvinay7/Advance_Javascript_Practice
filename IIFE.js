//sending a parameter it treats it as global variable if initial in inside function it variable scope expires 

// (function myIIFE(){
//    console.log(num)
//     num++;
//     console.log(num);
//     return num!==5?myIIFE(num) : console.log('finished')
// })(num=0)

//in IIFE we can call function immediately and we can send a argument
//we can defined a variable
// (function myIIFE(){
//     num++;
//     console.log(num);
//     return num!==5?myIIFE(num) : console.log('finished')
// })(num=0)


// (function myIIFE(){
//     num++;
//     console.log(num);
//     return num!==5?myIIFE(num) : console.log('finished')
// })(num=0)


//the module pattern
const score=(()=>{
    let count=0;
    return {
        current:()=> {return count},
        

        increment: ()=> {count++},
        reset: ()=> {count=0}
    }
})()

score.increment();
score.increment();
score.increment();
score.increment();
score.increment();
score.increment();
console.log(score.current())