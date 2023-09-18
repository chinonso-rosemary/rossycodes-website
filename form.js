const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput(){
    // debugger
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    console.log(usernameValue, emailValue, passwordValue, password2Value);
    
    if (usernameValue === ' '){
        setErrorFor(username, 'username cannot be blank');
    }

    else if(usernameValue.length < 6){
        setErrorFor(username,"username must atleast be 6 character long");
    }
    else{
        setSuccessFor(username);
    }


     if(emailValue === ' '){
        setErrorFor(email,"email cannot be blank");
    }
    else{
        setSuccessFor(email);
    }


     if(passwordValue === ' '){
        setErrorFor(password,"please input your password");
    }
    else if(passwordValue.length < 8){
        setErrorFor(password,"password must be atleaste 8 character long");
    }
    else{
        setSuccessFor(password);
    }


     if(password2Value === ' '){
        setErrorFor(password2,"confirm password");
    }
    else if(passwordValue !== password2Value ){
        setErrorFor(password2,"password mismatch");
    }
    else{
        setSuccessFor(password2);
    }

    // debugger
  function setErrorFor(input, message){
    const  formControl = input.parentElement;  
 
      const small = formControl.querySelector('small');
         // add error message inside small
     small.innerHTML = message;
    //   add error class
      formControl.className = 'form-control error';
  }
 
  function setSuccessFor(input){
     const formControl = input.parentElement;
     formControl.className = 'form-control success';
  }

}

 function message(){
    const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const msg = document.querySelector('.message');
const success = document.getElementById('success');
const danger = document.getElementById('danger');

form.addEventListener('submit',(e)=>{
e.preventDefault();
})

if(form.value === ''|| username.value === ''|| email.value === ''|| password.value === ''|| password2.value === ''|| msg.value === ''){
    danger.style.display = 'block';
}else{
    setTimeout( ()=>{
        username.value = '';
        email.value = '';
        password.value = '';
        password2.value = '';
        msg.value= '';
    },2000);
    success.style.display = 'block';
}
// setTimeout(() =>{
//     danger.style.display = 'none';
//     success.style.display = 'none';
// },4000);
}














// let elems = document.querySelector('.question')
// console.log(elems);

// let q = prompt('what is your name');
// elems.innerHTML = q;
// console.log(q);


// function reply(){
//     let reply1 = ans;
//     return reply1;
// }

// let elems1 = document.querySelector('.paraspan')
// console.log(elems1.innerHTML);

// let ans = prompt('what is your name' );
// elems1.innerHTML = ans



// function addNumbers(a,b,c){
//     return a + b + c;
// }

// const numbers = [1,2,3];
// const sum = addNumbers(...numbers);
// console.log(sum);


// let sign = "hello"
// arr3 = Array.from(sign)
// console.log(arr3);
// const newArr3 = Array.from(arr3,word =>word.toupperCase)

// // event handler

// let button = document.querySelector



