//객체 선택
const elemSec2= document.querySelector('.sec2');
const elemSlider = elemSec2.querySelector('.slider');
//변수선언
let posLeft = 0;
//가로 스크롤 종료 기준위치 정하기
// const MAX_LEFT_POS = (elemSlider.scrollWidth-(document.documentElement.clientWidth*0.7))*-1;
const MAX_LEFT_POS = (elemSlider.offsetWidth-(window.innerWidth*0.7))*-1;
let posTop = 0;
//함수정의
console.log('맥스레프트:',MAX_LEFT_POS)

const progressBar = ()=>{
    let progress =(posLeft/MAX_LEFT_POS)*100;
    console.log('progressBar내에서 progress:',progress);
    const bar = document.querySelector('.indicator>.bar');
    bar.style.width = `${progress}%`;
}
//moveY=deltaY
////deltaY는 스크롤 내릴때 100 스크롤 올릴때 -100
const moveItemY =(moveY)=>{
    posTop += moveY;
    //posTop는 스크롤 내릴때 100 스크롤 올릴때 -100
    for(let i=0;i<elemSlider.childElementCount;i++){
        if(i%2){
            elemSlider.children[i].style.transform =`translateY(${posTop/(i*3)}px)`
        }else{
            elemSlider.children[i].style.transform =`translateY(${-posTop/(i*3)}px)`
        }
    }
}

console.log('posleft:',posLeft);
//moveY=deltaY
const moveSliderX = (moveY)=>{
    console.log('moveSliderX내에서 moveY:',moveY);
    posLeft -= moveY;
    //posLeft는 초기값0 moveY가 100일때(스크롤 내릴때) -100씩 감소
    //moveY가 -100일때 100씩 증가 slide초기위치값은 0
    console.log('moveSliderX내에서 posleft:',posLeft);
    if(posLeft < MAX_LEFT_POS){
    //MAX_LEFT_POS = -2816.8
        posLeft=MAX_LEFT_POS;
        return;
        //슬라이더위치 최대 오른쪽 위치 지정
    }else if(posLeft>0){
        posLeft = 0;
        return;
        //슬라이더의 최대 왼쪽위치 지정
    }//return;이 실행되면 moveSliderX 함수의 실행이 즉시 종료됩니다. 
    //즉, return; 문 이후에 있는 코드는 실행되지 않고, 
    //moveSliderX를 호출한 부분으로 제어가 반환됩니다.


    elemSlider.style.transform = `translateX(${posLeft}PX)`
    moveItemY(moveY);
    progressBar();
}

// deltaY는 스크롤 내릴때 100 스크롤 올릴때 -100
const onEventSection2=(event)=>{
    event.preventDefault();
    moveSliderX(event.deltaY);
    if(event.deltaY<0 && posLeft>=0){
        elemSec2.style.top =`100%`
    }//스크롤을 위로 올리면 deltaY는 -100이고 posLeft는 0일때
    //휠을 올리면 elemSec2가 내려감
    console.log('deltaY:',event.deltaY);
    
    
    console.log('posleft:',posLeft);
}
// event.deltaY의 값이 100씩 나오는 것은 브라우저 및 운영체제, 
// 그리고 마우스 자체의 설정에 따라 다를 수 있습니다. 
// 일반적으로 브라우저와 하드웨어는 사용자가 한 번에 얼마나 많은 
// "라인" 또는 "픽셀"을 스크롤할 수 있는지를 설정하게 됩니다. 
// 이 설정에 따라 event.deltaY의 값이 결정될 수 있습니다.
// 표준에 따르면 event.deltaY의 단위는 "픽셀"입니다. 그러나 
// 실제로 이 값은 마우스, 터치패드, 또는 다른 입력 장치, 그리고 
// 브라우저의 구현에 따라 다를 수 있습니다. 일반적으로 대부분의 
// 브라우저와 마우스 설정에서는 스크롤 한 번에 대략 100 픽셀을 
// 이동하도록 기본 설정되어 있습니다. 그래서 event.deltaY 값이 100 
// 또는 -100으로 나타날 수 있습니다.

elemSec2.addEventListener('wheel',onEventSection2,{passive:false});