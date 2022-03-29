const doc = document.querySelector('body');
const tag = document.querySelector('.width');

const logo = document.querySelector('.bottom')

const svgDoc = logo.contentDocument;

console.log(svgDoc)
const svg = svgDoc.getElementById('logo');
console.log(svg)
window.addEventListener('resize', (value) => {
    tag.innerHTML = window.innerWidth
})