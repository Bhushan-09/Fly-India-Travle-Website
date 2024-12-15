const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");



menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");


    const isOpen =navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen? "bx bxl-xing" : "bx bx-menu"
    )
});
navLinks.addEventListener("click",(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","bx bx-menu");
});

const scrollRevealOption = {
  distance: "50px",
  origin:"bottom",
  duration: 1000,  
};

ScrollReveal().reveal(" .header__image img",{
  ...scrollRevealOption,
  origin:"right",
  interval:300,
});
ScrollReveal().reveal(" .header__content h1",{
  ...scrollRevealOption,
   delay:1000,
});
ScrollReveal().reveal(" .header__content .section__description",{
  ...scrollRevealOption,
   delay: 1500,
});
ScrollReveal().reveal(" .header__content form",{
  ...scrollRevealOption,
   delay: 2000,
});



ScrollReveal().reveal(" .choose__image img",{
  ...scrollRevealOption,
  origin:"left",
});
ScrollReveal().reveal(" .choose__content .section__subheader",{
  ...scrollRevealOption,
   delay:500,
});
ScrollReveal().reveal(" .choose__content .section__header",{
  ...scrollRevealOption,
   delay:1000,
});
ScrollReveal().reveal(" .choose__list li",{
  ...scrollRevealOption,
   delay:1300,
   interval:400,
});

const swiper = new Swiper(".swiper",{
  slidesPerView:3,
  spaceBetween:0,
  loop:true,
});


ScrollReveal().reveal(" .explore__image img",{
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(" .explore__content .section__subheader",{
  ...scrollRevealOption,
   delay:500,
});
ScrollReveal().reveal(" .explore__content .section__header",{
  ...scrollRevealOption,
   delay:1000,
});
ScrollReveal().reveal(" .explore__content .section__description",{
  ...scrollRevealOption,
   delay: 1500,
});
ScrollReveal().reveal(" .explore__content .explore__btn",{
  ...scrollRevealOption,
   delay:2000,
});
ScrollReveal().reveal(" .explore__grid div",{
   duration:1000,
   delay:2500,
   interval:400,
});

const next =document.getElementById("next")
const prev =document.getElementById("prev")
const clientCard = Array.from(document.querySelectorAll(".client__card"));

next.addEventListener("click",(e)=>{
  for(let index=0; index<clientCard.length; index++){
    if(clientCard[index].classList.contains("active")){
      const nextindex =(index + 1) % clientCard.length;
      clientCard[index].classList.remove("active");
      clientCard[nextindex].classList.add("active");
      break;
    }
  }
});

prev.addEventListener("click",(e)=>{
  for(let index=0; index<clientCard.length; index++){
    if(clientCard[index].classList.contains("active")){
      const previndex =(index ? index:clientCard.length) -1;
      clientCard[index].classList.remove("active");
      clientCard[previndex].classList.add("active");
      break;
    }
  }
});


ScrollReveal().reveal(" .subscribe__container .section__header",{
  ...scrollRevealOption,
});
ScrollReveal().reveal(" .subscribe__container .section__description",{
  ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(" .subscribe__container form",{
  ...scrollRevealOption,
    delay:1000,
});



