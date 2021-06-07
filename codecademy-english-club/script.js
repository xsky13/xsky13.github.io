const nav = document.querySelector('.nav');
const brand = document.querySelector('.brand');
const btn = document.querySelectorAll('.btn-primary');
/* 

This is for later

const submitBtn = document.querySelector('.submit-btn');
const email = document.getElementById('email');
const errors = document.getElementById('errors');

*/

window.onscroll = () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        nav.style.padding = "15px 10px";
        nav.style.position = "fixed";
        brand.style.fontSize = "1.5em";
        nav.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)";
    } else {
        nav.style.padding = "80px 10px";
        brand.style.fontSize = "2em";
        nav.style.boxShadow = "";
        nav.style.position = "";
    }
}

btn.forEach(btn => {

    btn.addEventListener('click', e => {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple');
        btn.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.list');

menu.addEventListener('click', () => {
    list.classList.toggle('nav-active');
    menu.classList.toggle('toggle');
    menu.classList.toggle('menu-active');
});

