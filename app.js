let closedface = document.querySelector('.closed')
let openface = document.querySelector('.open')
let text = document.querySelector('.gaali')
// Add event 

closedface.addEventListener('click' , ()=> {
    if (openface.classList.contains('open')) {
        openface.classList.add('active');
        closedface.classList.remove('active');
        text.classList.remove('hide');
    }

openface.addEventListener('click' , () =>{
    if (closedface.classList.contains('closed'))
    {
        closedface.classList.add('active');
        openface.classList.remove('active');
        text.classList.add('hide');
        
    }
} )    
})