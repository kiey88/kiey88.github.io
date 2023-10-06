const elemFTCard= document.querySelectorAll('.features .card');
const onMouseEnter = (event)=>{
    // console.log(event.x,event.y);
    // console.log(event.offsetX,event.offsetY)
    event.target.classList.add('in');
    console.dir(event.target.children[3]);
    let obj=event.target.children[3];
    obj.style.transform = `translate(${event.offsetX}px,${event.offsetY}px) scale(180)`;
}
const onMouseLeave =(event)=>{
    event.target.classList.remove('in');
    let obj = event.target.children[3];
    obj.style.transform = `translate(${event.offsetX}px,${event.offsetY}px) scale(0)`;
};
elemFTCard.forEach((value)=>{
    value.addEventListener('mouseenter',onMouseEnter);
    value.addEventListener('mouseleave',onMouseLeave)
    const obj = document.createElement('span');
    
    value.appendChild(obj);
});