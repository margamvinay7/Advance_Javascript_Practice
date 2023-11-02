document.querySelector('#category').addEventListener('click',(e)=>{
    if(e.target.tagName==='LI')
    console.log(e.target.id)
   
})