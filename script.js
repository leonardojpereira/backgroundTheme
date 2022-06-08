const lightMode = document.querySelector('#light-mode');
const darkMode = document.querySelector('#dark-mode');
const body = document.querySelector('body');
const title = document.querySelector('h1');


//light mode
lightMode.addEventListener = (click, changeLightMode);

function changeLightMode() {
    body.style.backgroundColor = 'white';
    title.style.color = 'black';
}

//dark mode
darkMode.addEventListener = (click, changeDarkMode);

function changeDarkMode() {
     body.style.background = 'rgb(54, 51, 51)';
     title.style.color = 'white';
}