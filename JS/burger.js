const openBurger = document.querySelector(".open_burger")
const burgerMenu = document.querySelector(".burger__menu")
const burgerClose = document.querySelector(".close_modal")




function showBlock() {
    burgerMenu.classList.add('b-show');
  }

  openBurger.addEventListener('click' , showBlock )
openBurger.addEventListener("click",   (e) =>{
    burgerMenu.style.display = "block";
})







burgerClose.addEventListener("click", (e) =>{
    burgerMenu.style.display = "none";
})


