let sum=(...args)=>{
    return [...args].reduce((acc,num)=>acc+num);
}

const callCounter=(fn)=>{
    count=0
    return(...args)=>{
    console.log(`sum has been called ${count+=1} times`)
    return fn(...args)
    }
}
    //this function accepts a function as parameter and then return the anonymous function
    //when we call the function the anonymous function get called 
sum=callCounter(sum)

console.log(sum(2,3,5))
console.log(sum(1,5))
console.log(sum(14,5))