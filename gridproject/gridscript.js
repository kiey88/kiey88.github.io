//객체 선언
const elemMenuList = document.querySelectorAll('nav>ul>li>a');
const elemMenuIcon = document.querySelector('.menu-icon');
const elemSection  = document.querySelectorAll('main>section')
const elemMain     = document.querySelector('main')
//메뉴별 section이 보여지도록
const viewSection = (obj) => {
    // console.log(obj.id);
    if(obj.id){
        //모든 section에서 class를 삭제
        elemSection.forEach((value)=>{
            value.classList.remove('viewon');
        });
        elemSection[Number(obj.id)].classList.add('viewon')
    }
    
}

//메뉴 리스트에서 클릭을 하면 실행되는 함수
const onClickMenu = (event) =>{
    // console.log('menu list click');
    const menuBar = document.querySelector('nav');
    menuBar.classList.toggle('menu-off');
    //menu-icon 에 class=icon-on 추가
    elemMenuIcon.classList.toggle('icon-on');
    //메인화면이 보이게 하는 class=mainon 추가
    elemMain.classList.toggle('mainon');
    //id에 맞는 섹션이 보이도록 해주는 작업
    viewSection(event.target);

}

const intit =()=>{
    //처음 시작 함수
    elemMenuList.forEach((value)=>{
        value.addEventListener('click',onClickMenu);
    });
    elemMenuIcon.addEventListener('click',onClickMenu)
}


intit();