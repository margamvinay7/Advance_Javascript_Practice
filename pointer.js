const pointers=document.querySelector('#pointer')
pointers.style.backgroundColor='blue'

document.querySelector('body').addEventListener('mousemove',(e)=>{
    pointers.style.left=`${e.pageX}px`
    pointers.style.top=`${e.pageY}px`
    
})
pointers.addEventListener('click',(e)=>{
    
   
})

