const LOGIN_KEY="username";
const elemUserForm = document.querySelector('#loginForm');
const elemName = document.querySelector('.loginName');

const onLogout = () =>{
    localStorage.removeItem(LOGIN_KEY);
    elemUserForm.style.display = 'flex';
    elemName.style.display= 'none';
    
};
const viewUserName =(txt)=>{
    //form 은 안보이게
    elemUserForm.style.display = 'none';
    //p태그는 보이게
    elemName.style.display= 'block';
    elemName.textContent = `${txt} 님 반갑습니다 `;
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-right-from-bracket fa-beat-fade"></i>';
    btn.addEventListener('click',onLogout);
    elemName.appendChild(btn);

}
const onEventUserForm =(event)=>{
    event.preventDefault();
    const txt = elemUserForm.querySelector('input').value;
    elemUserForm.querySelector('input').value = '';
    viewUserName(txt);
    localStorage.setItem(LOGIN_KEY,txt);
}

const log_init =()=>{
    const username = localStorage.getItem(LOGIN_KEY);
    if(username){
        //값이 있으면 hello username으로 보이도록
        viewUserName(username);
    }else{
        elemUserForm.addEventListener('submit',onEventUserForm);
    }
}

log_init();