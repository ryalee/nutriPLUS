// mostrar/ocultar menu na versão mobile

function showMenu() {
  const menu = document.querySelector('.menu_block');
  const menuIcon = document.querySelector('.fa-bars');

  menu.classList.toggle('displayed');
  menuIcon.classList.toggle('fa-x');
}