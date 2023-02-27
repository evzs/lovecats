
let lastScrollTop;
let navbar = document.getElementById('nav-bar')
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top='-69px';
    }
    else{
        navbar.style.top='0.5em';
    }
    lastScrollTop = scrollTop;
});

let lastScrollLeft;
let vnavbar = document.getElementById('v-nav-bar')
window.addEventListener('scroll',function(){
    let scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;
    if(scrollLeft > lastScrollLeft){
        vnavbar.style.left='0.5em';
        vnavbar.style.top='10.5em';
        vnavbar.style.bottom='10.5em';
    }
    else{
        vnavbar.style.left='-69px';
    }
    lastScrollLeft = scrollLeft;
});

