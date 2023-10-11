const elemSec1 = document.querySelector('.sec1');
const elemText = document.querySelector('.sec1>p');
const elemCircle = document.querySelectorAll('.circle>span')
const onEventSection1 = (event) => {
    event.preventDefault();
    if( event.deltaY > 0 ) {
        elemSec2.style.top = '0';
    }
}
const boost = (event) =>{
    elemCircle.forEach((element) => {
        element.style.animationDuration = "0.0001s";
    });
}
const reset = () => {
    elemCircle.forEach((element) => {
        const originalDuration = element.getAttribute('data-original-duration');
        element.style.animationDuration = originalDuration;
    });
};
elemText.addEventListener('mouseover',boost);
elemText.addEventListener('mouseout',reset);
elemSec1.addEventListener('wheel',onEventSection1,{passive:false});