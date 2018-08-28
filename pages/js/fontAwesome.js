let btn_top = document.querySelector('.scroll-top');
    btn_top.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });

window.onscroll = function(){
    if (window.screenY === window.scrollY) {
        btn_top.classList.add('display-none');  
    } else if (btn_top.classList.contains('display-none') === true) {
        btn_top.classList.remove('display-none');
        btn_top.classList.add('scroll-top');
    };
};