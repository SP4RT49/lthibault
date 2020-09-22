window.addEventListener('scroll', function(){
    var nav = document.querySelector('header');
    nav.classList.toggle('sticky', window.scrollY > 860);
    nav.classList.toggle('sticky2', window.scrollY > 1080);
});