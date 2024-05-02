const initApp=()=>{
    const button=document.querySelector('button');
    button.addEventListener('click',debounce(clicklog,2000))
}

const clicklog=()=>console.log('clicked')

document.addEventListener('DOMContentLoaded',initApp)

const debounce=(fn,delay)=>{
    let vid;
    console.log(`vid at immediate load:${vid}`);
    return (...args)=>{
        console.log(...args)
        console.log(`previous vid:${vid}`);
        if (vid) clearTimeout(vid);
        vid=setTimeout(()=>{
           console.log(fn(...args));
            

        },delay)

        console.log('after time out',vid)
    }
}