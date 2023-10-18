//객체 가져오기
const elemBtn = document.querySelector('.thankyou_message > .close')
const elemSec = document.querySelectorAll('main > section');
const elemPortBtn = document.querySelectorAll('.portfolio .moveBtn i');
const elemPortCard = document.querySelectorAll('.portfolio .card')
const elemCardList = document.querySelector('.portfolio .cardlist')
//전역변수
let currentPage = 0;
let currentCard = 0;
let currentPos =0;
// console.log(elemSec)
// const setSectionTop = ()=>{
//     let offsetTop = elemSec[currentPage-1].offsetTop;
//     return offsetTop;
// };
const onEventWheel=(event)=>{
    console.log(event.deltaY);
    event.preventDefault();
    if(event.deltaY>=0){
        currentPage++;
        if(currentPage>=4){currentPage=4;}
    }else{
        currentPage--;
        if(currentPage<=0){currentPage=0;}
    }
    // let topPos = document.documentElement.clientHeight*currentPage;
    // if(currentPage>=3){
    //     topPos+=(document.documentElement.clientHeight*0.5);
    // }
    // console.log(topPos)
    let topPos = 0;
    if(currentPage >=1){
        topPos = elemSec[currentPage-1].offsetTop;
    }
    window.scrollTo({left:0,top:topPos,behavior:"smooth"});
}
const mobileCurrentCard = (index)=>{
    
    if(index==1){
        //왼쪽에 있는 버튼
        currentCard--;
        if(currentCard<=0){currentCard=0}
        console.log("left")
    }else{
        //오른쪽에 있는 버튼
        currentCard++;
        if(currentCard >= elemPortCard.length-1){
            currentCard = elemPortCard.length-1;
        }
    }
}
const pcCurrentCard = (index)=>{
    let posFlag= 0;
    if(index ==1){
        //왼쪽버튼
        posFlag =-1;
    }else{
        //오른쪽버튼
        posFlag =1;
    }
    currentPos+=(posFlag*100);
    if(currentPos>0){currentPos=0;}
        else if( currentPos<-1400){currentPos=-1400}
    elemCardList.style.transform = `translateX(${currentPos}px)`;
}

const onEventPortBtn= (event) => {
    console.log(event.target.dataset.index)
    let cssMedia = window.matchMedia('(min-width:1024px)').matches;
    if(cssMedia){
        //pc상 레이아웃
        pcCurrentCard(event.target.dataset.index);
    }else{
        //mobile,table 레이아웃
        mobileCurrentCard(event.target.dataset.index)
    }
    // if(event.target.dataset.index==1){
    //     //왼쪽에 있는 버튼
    //     // currentCard--;
    //     if(currentCard<=0){currentCard=0}
    //     console.log("left")
    // }else{
    //     //오른쪽에 있는 버튼
    //     // currentCard++;
    //     if(currentCard >= elemPortCard.length-1){
    //         currentCard = elemPortCard.length-1;
    //     }
    //     console.log("right")
    // }
    
    const obj=document.querySelector('.card.on')
    obj.classList.remove('on');
    elemPortCard[currentCard].classList.add('on');
}
const onReset =()=>{
    currentCard=0;
    currentPos=0;
    const obj=document.querySelector('.card.on')
    obj.classList.remove('on');
    elemPortCard[0].classList.add('on');
    elemCardList.style.transform = 'translateX(0)';
}
const init =()=>{
    elemBtn.addEventListener('click',() => {
        elemBtn.parentElement.style.display = "none";
    });
    window.addEventListener('wheel',onEventWheel,{passive:false});
    elemPortBtn.forEach((value)=>{
        value.addEventListener('click',onEventPortBtn);
    });
    window.addEventListener('resize',onReset);
};
init();