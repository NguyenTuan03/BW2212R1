var header_menu = document.querySelector('.header_left-menu');
    header_menu.onclick = function(){
        document.querySelector('.nav-title__list').style.transform = 'translateX(0)';
    }


var itemTitles = document.querySelectorAll('.nav-title__list--link a');
itemTitles.forEach(item => {
    item.onclick = function()
    {
        document.querySelector('.nav-title__list').style.transform = 'translate(-100%)';
    }
})


document.querySelector('.arrow-up').onclick = function() {
    window.scrollTo(0,0);
}


var itemMenus = document.querySelectorAll('.nav-title__list--link');
itemMenus.forEach(item => {
    item.onclick = function()
    {
        let action = document.querySelector('.action')
        action.style.transform = 'translate(' + (item.offsetLeft + 5) + 'px,0) scale(1.7)';
    }
})


document.querySelector('.Tour-price--next').onclick = function()
{
    let tourItems =document.querySelectorAll('.Tour-price_list-item');
    document.querySelector('.Tour-price_list').appendChild(tourItems[0]);
}
document.querySelector('.Tour-price--prev').onclick = function()
{
    let tourItems =document.querySelectorAll('.Tour-price_list-item');
    document.querySelector('.Tour-price_list').prepend(tourItems[tourItems.length - 1]);
}