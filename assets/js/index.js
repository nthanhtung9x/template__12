//swiper
var swiper = new Swiper('.swiper-container', {
    loop:true,
    autoplay: true,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// END Swiper

//mixitup
var mixer = mixitup('.schedule__container');
mixer.filter('.dangchieu');
//END mixitup

var btnDarkMode = document.getElementsByClassName('darkmode')[0];

// CUSTOM Schedule
var prevSchedule = document.getElementsByClassName('schedule__btn')[0];
var nextSchedule = document.getElementsByClassName('schedule__btn')[1];
prevSchedule.style.color ="#fff";
var schedule__control  = document.getElementsByClassName('schedule__heading')[0];
prevSchedule.addEventListener('click',function(){
    schedule__control.className = schedule__control.className.replace(' active','');
    if(schedule__control.className.indexOf(' active') == -1){
        prevSchedule.style.color ="#fff";
        nextSchedule.style.color ="#000";
      }
    if(btnDarkMode.className.indexOf(' dm__active') != -1){
      prevSchedule.style.color ="#fff";
      nextSchedule.style.color ="#fff";
    }
});

nextSchedule.addEventListener('click',function(){
    schedule__control.className = 'schedule__heading active';
    if(schedule__control.className.indexOf(' active') != -1){
        prevSchedule.style.color ="#000";
        nextSchedule.style.color ="#fff";
      }
    if(btnDarkMode.className.indexOf(' dm__active') != -1){
      prevSchedule.style.color ="#fff";
      nextSchedule.style.color ="#fff";
    }
});

// END CUSTOM Schedule

// Darkmode 
btnDarkMode.addEventListener('click',function(){
  if(btnDarkMode.className.indexOf(' dm__active') == -1){
    btnDarkMode.className = 'darkmode dm__active';
    // header
    document.getElementsByClassName('header')[0].style.background = 'var(--header-darkmode)';
    for(let i = 0; i < document.getElementsByClassName('nav__link').length; i++) {
      document.getElementsByClassName('nav__link')[i].style.color = '#fff';
    }
    document.getElementsByClassName('user__img')[0].style.background = "#fff";
    document.getElementsByClassName('user__name')[0].style.color = '#fff';
    //END header
    
    // Schedule
    document.getElementsByClassName('schedule')[0].style.background = "var(--bg-darkmode)";
    for(let i = 0; i < document.getElementsByClassName('schedule__btn').length; i++) {
      document.getElementsByClassName('schedule__btn')[i].style.color = '#fff';
    }
    // END Schedule

    // Review
    document.getElementsByClassName('review')[0].style.background = "var(--bg-darkmode)";
    document.getElementsByClassName('review__heading')[0].style.background = "#000";
    document.getElementsByClassName('review__wrapper')[0].style.borderColor = 'grey';
    for(let i = 0; i < document.getElementsByClassName('review__name').length; i++) {
      document.getElementsByClassName('review__name')[i].style.color = '#fff';
      document.getElementsByClassName('review__content')[i].style.color = '#fff';
      document.getElementsByClassName('review__vote')[i].style.color = '#fff';
    }
    // End review

    // Footer
    document.getElementsByClassName('footer')[0].style.background = "var(--header-darkmode)";
    for(let i = 0; i < document.getElementsByClassName('footer__heading').length; i++) {
      document.getElementsByClassName('footer__heading')[i].style.color = '#fff';
    }
    for(let i = 0; i < document.getElementsByClassName('footer__link').length; i++) {
      document.getElementsByClassName('footer__link')[i].style.color = '#fff';
    }

    for(let i = 0; i < document.getElementsByClassName('footer__text').length; i++) {
      document.getElementsByClassName('footer__text')[i].style.color = '#fff';
    }
    // End footer
     // Menu - mobile
    for(let i = 0; i < document.getElementsByClassName('bg__dark').length; i++) {
      document.getElementsByClassName('bg__dark')[i].style.background ="#fff";
    }

    document.getElementsByClassName('menu__wrapper')[0].style.background = "var(--bg-darkmode)";
    document.getElementsByClassName('menu__close')[0].style.color = "#fff";
    for(let i = 0; i < document.getElementsByClassName('menu__link').length; i++){
      document.getElementsByClassName('menu__link')[i].style.color = "#fff";
    }
    for(let i = 0; i < document.getElementsByClassName('menu__link__child').length; i++){
      document.getElementsByClassName('menu__link__child')[i].style.color = "#fff";
    }

    // End menu - mobile


  }
  else{
    btnDarkMode.className = btnDarkMode.className.replace(' dm__active','');
    // header 
    document.getElementsByClassName('header')[0].style.background = '#fff';
    for(let i = 0; i < document.getElementsByClassName('nav__link').length; i++) {
      document.getElementsByClassName('nav__link')[i].style.color = '#000';
    }
    document.getElementsByClassName('user__img')[0].style.background = "transparent";
    document.getElementsByClassName('user__name')[0].style.color = '#000';

    // Schedule
    document.getElementsByClassName('schedule')[0].style.background = "transparent";
    for(let i = 0; i < document.getElementsByClassName('schedule__btn').length; i++) {
      document.getElementsByClassName('schedule__btn')[i].style.color = '#000';
    }

    // END Schedule

    // Review
    document.getElementsByClassName('review')[0].style.background = "transparent";
    document.getElementsByClassName('review__heading')[0].style.background = "var(--second-color)";
    document.getElementsByClassName('review__wrapper')[0].style.borderColor = 'var(--bg-color)';
    for(let i = 0; i < document.getElementsByClassName('review__name').length; i++) {
      document.getElementsByClassName('review__name')[i].style.color = 'var(--second-color)';
      document.getElementsByClassName('review__content')[i].style.color = 'var(--second-color)';
      document.getElementsByClassName('review__vote')[i].style.color = 'var(--second-color)';
    }
    // End review

    // Footer
    document.getElementsByClassName('footer')[0].style.background = "transparent";
    for(let i = 0; i < document.getElementsByClassName('footer__heading').length; i++) {
      document.getElementsByClassName('footer__heading')[i].style.color = '#000';
    }
    for(let i = 0; i < document.getElementsByClassName('footer__link').length; i++) {
      document.getElementsByClassName('footer__link')[i].style.color = 'var(--second-color)';
    }
    for(let i = 0; i < document.getElementsByClassName('footer__text').length; i++) {
      document.getElementsByClassName('footer__text')[i].style.color = '#000';
    }
    // End footer
    // Menu - mobile
    for(let i = 0; i < document.getElementsByClassName('bg__dark').length; i++) {
      document.getElementsByClassName('bg__dark')[i].style.background ="#000";
    }
    document.getElementsByClassName('menu__wrapper')[0].style.background = "var(--bg-color)";
    document.getElementsByClassName('menu__close')[0].style.color = "#000";
    for(let i = 0; i < document.getElementsByClassName('menu__link').length; i++){
      document.getElementsByClassName('menu__link')[i].style.color = "#000";
    }
    for(let i = 0; i < document.getElementsByClassName('menu__link__child').length; i++){
      document.getElementsByClassName('menu__link__child')[i].style.color = "#000";
    }
    // End menu - mobile
  }
})

function hover(val){
    val.style.color = 'var(--primary-color)';
}

function unhover(val){
  if(btnDarkMode.className.indexOf(' dm__active') == -1){
    val.style.color = '#000';
  }
  else {
    val.style.color = '#fff';
  }
}

// scroll
var scrollBtn = document.getElementsByClassName('scroll')[0];
window.addEventListener('scroll',function(){
  if(window.scrollY > 200){
    scrollBtn.className = 'scroll scroll__active';
  }
  else 
    scrollBtn.className = scrollBtn.className.replace(' scroll__active','');
});

scrollBtn.addEventListener('click',function(){
  window.scrollTo(0,0);
});


// menu - mobile 

var item = document.getElementsByClassName('menu__link');
var child = document.getElementsByClassName('menu__list__child');

function showItem(val) {
  if(item[val].className.indexOf(' menu__active') == -1){
    child[val].style.display = 'block';
    item[val].className += ' menu__active';
  }
  else {
    child[val].style.display = 'none';
    item[val].className = item[val].className.replace(' menu__active','');

  }
}