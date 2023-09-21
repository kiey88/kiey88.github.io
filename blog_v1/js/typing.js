const elemSpan = document.querySelector('.home span.text');
const strData =["Web Publisher","Front-end Developer","Back-end Developer"];
let content = strData[0].split('');
/**strData[0]: strData 배열의 첫 번째 요소에 액세스합니다. 
이 요소는 원래 코드를 기반으로 하는 "Web Publisher"입니다.
.split(''): 이 JavaScript 메소드는 문자열을 해당 문자 배열로 분할합니다. 
예를 들어 "Web Publisher".split('')는 
['W', 'e', ​​'b', ' ', 'P', 'u', 'b', 'l', 'i', 's', 'h', 'e', ​​'r'].
content = strData[0].split('');: 이 줄은 strData의 첫 번째 문자열에 
있는 개별 문자 배열을 사용하여 content 변수를 초기화합니다. 
*/

let currentIdx = 0;
let textIdx = 0;

//타이핑 효과중 글자 삭제
const deleteText=()=>{
    --textIdx;
    content.pop();
    //content 배열에서 마지막 요소를 제거하고 해당 요소를 반환합니다. 
    elemSpan.textContent = content.join('');
    //content는 문자 배열입니다. 예를 들어 content = ['W', 'e', ​​'b']인 경우 
    //"Web"이라는 단어를 나타냅니다.
    //content.join(''): join('') 메서드는 content 배열의 요소를 단일 문자열로
    //결합합니다. 인수로 빈 문자열 ''은 
    //요소가 요소 사이에 문자 없이 결합되어야 함을 의미합니다. 
    //따라서 ['W', 'e',​​'b'].join('')은 "web"이 됩니다.
    if( textIdx >= 1){
        
        setTimeout(deleteText,100);
    } else {
        currentIdx++;
        if(currentIdx > 2){
            currentIdx = 0;
        }
        setTimeout(init,1000);
    }
    
}


const addText =()=>{
    let text = content[textIdx];
    /*content 배열에서 다루고 있는 문자의 현재 인덱스를 추적하는 데 
    사용되는 변수입니다. 예를 들어 textIdx가 0이면 첫 번째 문자에 있는 것입니다. 
    textIdx가 1이면 두 번째 문자에 있는 것입니다.*/
    textIdx+=1;
    elemSpan.textContent += text;
    if( textIdx < content.length){
        setTimeout( addText, 100);
        //0.5초마다 실행
    } else{
        
        
        setTimeout(deleteText,1000);
    }

}

const init =() => {
    content = strData[currentIdx].split('')
    elemSpan.textContent = "";
    //이전에 elemSpan에 표시되었던 텍스트가 지워지고 새로운 
    //텍스트 타이핑 효과가 시작될 때 초기 상태가 됩니다.
    addText();
}
init();