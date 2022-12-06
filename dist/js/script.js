// burger menu 

const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu__link');
const burger = document.querySelector('.hamburger');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay')

burger.addEventListener('click', () => {
	menu.classList.add('active');
})

closeElem.addEventListener('click', closeAll);
overlay.addEventListener('click', closeAll);
links.forEach((e) => {
	e.addEventListener('click', closeAll);
});

function closeAll() {
	menu.classList.remove('active')
};

// percent calculator

const percent = document.querySelectorAll('.skills__percent');
const scale = document.querySelectorAll('.skills__scale');

percent.forEach((elem, i) => {
	scale[i].style.width = elem.innerHTML;
})