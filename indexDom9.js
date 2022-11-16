let form = document.getElementById('form');
let input=form.querySelectorAll('input');
input[2].addEventListener('click',()=>{
    localStorage.setItem('name',input[0].value);
    localStorage.setItem('email',input[1].value);
})