const number=257;
console.log(number)
let temp=number;
reverse='',reminder='';
while(temp!==0){



reminder=Math.floor(temp%10);
reverse=Math.floor(reverse*10+reminder);
temp=Math.floor(temp/10);
console.log(temp)

}

console.log(reverse)
