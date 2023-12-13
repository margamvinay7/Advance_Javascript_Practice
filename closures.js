//immediately invoked function expression
//
// const privateCounter=(()=>{
// let count=0;
// console.log(`initial value:${count}`);
// return ()=>{count+=1; console.log(count)}
// })()
// privateCounter()

//closures without immediate invoked function
const privateCounter1=()=>{
    let value=0;
    const child=()=>{
      return value=value+1
       
    }
    return child;
}
const result=privateCounter1()
console.log(result())
console.log(result())
console.log(result())
console.log(result())
