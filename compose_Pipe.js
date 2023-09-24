const add2=(x)=>x+2;
const subtract1=(x)=>x-1;
const multiplyBy5=(x)=>x*5;

const result=multiplyBy5(subtract1(add2(4)));
console.log(result)

//the above is not a compose function let make's the compose function


//lets make a own compose and pipe function

//reduce((prev,fn)=>fn(prev),val)=multiplyBy5(subtract1(add2(val)))



