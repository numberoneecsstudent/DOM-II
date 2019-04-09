// Your code goes here
const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click ', (e) => {
    alert('You clicked the main-navigation')
})

const nav = document.querySelector(".nav");
nav.addEventListener("dblclick", (e) => {e.target.style.backgroundColor = 'red';});

const header = document.querySelector('intro');
body.addEventListener('blur', (event) => {
event.target.style.background = '';
});

const body = document.querySelector('body');
const header = document.querySelector('.main-navigation');
body.addEventListener("keydown", () => {header.style.opacity = "0"});

const navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("mouseenter", () => header.style.opacity = "1");

const adventureAwaits = document.querySelectorAll('.text-content h2')
adventureAwaits.forEach(node => {node.addEventListener('mousemove', (e) => {e.target.style.color = 'Maroon'})});

