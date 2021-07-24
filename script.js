const doc = document.querySelector('body');
const tag = document.querySelector('.width');

window.addEventListener('resize', (value) => {
    tag.innerHTML = window.innerWidth
})