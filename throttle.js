const initApp=()=>{
    const button=document.querySelector('button');
    button.addEventListener('click',throttle(clicklog,2000))
}

const clicklog=()=>console.log('clicked')

document.addEventListener('DOMContentLoaded',initApp)

const throttle=(fn,delay)=>{
    let lastTime=0;
    console.log('called throttle immediately');
    return (...args)=>{
        const now=new Date().getTime();
        if(now-lastTime<delay) return;
        lastTime=now;
        fn(...args);
    }
}