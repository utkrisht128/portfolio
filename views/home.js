const mainMenu = document.querySelectorAll('.mainMenu');
const closeMenu = document.querySelectorAll('.closeMenu');
const openMenu = document.querySelectorAll('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
