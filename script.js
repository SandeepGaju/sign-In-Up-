let SignUpBtn=document.querySelector(".signupbtn");
let SignInBtn=document.querySelector(".signinbtn");
let Name=document.querySelector(".name");
let Title=document.querySelector(".title");
let UnderLine=document.querySelector(".underline");
let Text=document.querySelector(".text");


SignInBtn.addEventListener('click' ,()=>{
    Name.style.maxHeight = '0';
    Title.innerHTML ='Sign In';
    Text.innerHTML ='forgot password ?';
    SignUpBtn.classList.add('disable');
    SignInBtn.classList.remove('disable');
    UnderLine.style.transform='translateX(35px)';
});




SignUpBtn.addEventListener('click' ,()=>{
    Name.style.maxHeight = '60px';
    Title.innerHTML ='Sign Up';
    Text.innerHTML ='Password Suggestion';
    SignUpBtn.classList.remove('disable');
    SignInBtn.classList.add('disable');
    UnderLine.style.transform='translateX(0)';
});



