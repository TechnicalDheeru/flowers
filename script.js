/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      closeNavLinks = document.getElementById('close-nav-links')


/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
/* Nav Home */ 
if(closeNavLinks){
   closeNavLinks.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}