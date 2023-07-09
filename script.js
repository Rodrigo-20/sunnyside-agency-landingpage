const doc = document.querySelector('body');
const tag = document.querySelector('.width');

const logo = document.querySelector('.bottom')

const menuIcon = document.querySelector('.menu-icon');

const nav = document.querySelector('nav ul');

const navContainer = document.querySelector('.top')

document.addEventListener("scroll", (e)=>
    {
        if(window.scrollY > 0 && !navContainer.classList.contains("nav-shadow")){
            navContainer.classList.add('nav-shadow');
        }
        if (window.scrollY == 0) {
            navContainer.classList.remove('nav-shadow');
        }
    });



window.addEventListener('resize', (value) => {
    tag.innerHTML = window.innerWidth
})

console.log(menuIcon);

menuIcon.addEventListener('click',
    () => {
        if(nav.classList.contains('menu-active')){
            nav.classList.remove("menu-active");
        }
        else{
            nav.classList.add("menu-active");
        }
} 
);