let hamburger = document.querySelector('.hamburger');
let navmenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.querySelectorAll('.nav-link').forEach(n=> n.addEventListener('click',()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}));




 function message(){
    
const form = document.getElementById('form');
const name1 = document.getElementById('Name');
const email = document.getElementById('Email Address');
const number = document.getElementById('phone-number');

const message = document.getElementById('message');
 const success = document.getElementById('success');
 const danger = document.getElementById('danger');

 form.addEventListener('submit', (e) => {
e.preventDefault();

// message();
});

    if(form.value === ''|| name1.value === ''|| email.value === ''|| number.value === ''|| message.value === ''){
    danger.style.display = 'block';
    }else{
        setTimeout(()=>{
            name1.value = '';
            email.value = '';
            number.value = '';
            message.value = '';
        },2000);
        success.style.display = 'block';
    }

    setTimeout(()=>{
        danger.style.display = 'none';
        success.style.display = 'none';
    },4000);
 }


 
