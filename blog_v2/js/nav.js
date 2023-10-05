let elemNav = document.querySelector('nav');
const elemIcon = document.querySelector('nav>a>i');
const elemMenu = document.querySelector('.gnb');
const onEventScroll = () =>{
    const scrollTop = document.documentElement.scrollTop
    if( scrollTop >= 100){
        //백그라운드 색상을 보이도록
        elemNav.style.backgroundColor = 'rgba(106, 21, 21,0.3)';
    }else{
        elemNav.style.background = 'none';
    }
}
const menuView=()=>{
    console.log("click");
    elemMenu.classList.toggle('on');
}
window.addEventListener('scroll',onEventScroll);
elemIcon.addEventListener('click',menuView);
