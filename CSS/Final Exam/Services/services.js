document.querySelector('.menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.header-menu').classList.toggle('d-move');
}
document.querySelector('.Backtotop').onclick = function() {
    window.scrollTo(0,0);
}
var lastScrollTop = 0;
navbar = document.querySelector('.scroll-navbar');
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) 
    {
        navbar.style.top = '-140px';
        navbar.style.transition = 'all ease-in 0.2s';
    }
    else
    {
        navbar.style.top = '0px';
        navbar.style.transition = 'all ease-in 0.2s';
    }
    lastScrollTop = scrollTop;
});
window.addEventListener('scroll',reveal);
function reveal()
{
    var reveals = document.querySelectorAll('.reveal');
    for (var i=0;i<reveals.length;i++)
    {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint)
        {
            reveals[i].classList.add('active');
        }
        else
        {
            reveals[i].classList.remove('active');
        }
    }
}
var rights = document.querySelectorAll('.right_animate');
var lefts = document.querySelectorAll('.left_animate');
window.addEventListener('scroll', slideIn)
function slideIn()
{
    const triggerBottom = window.innerHeight/5*4;
    rights.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom)
        {
            box.classList.add('active');
        }
        else
        {
            box.classList.remove('active');
        }
    })
    const leftBottm = window.innerHeight/5*4;
    lefts.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < leftBottm)
        {
            box.classList.add('active');
        }
        else
        {
            box.classList.remove('active');
        }
    })
}