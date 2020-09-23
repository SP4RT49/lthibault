window.addEventListener('scroll', function(){
    var nav = document.querySelector('header');
    nav.classList.toggle('sticky', window.scrollY > 250);
    nav.classList.toggle('sticky2', window.scrollY > 1040);

});