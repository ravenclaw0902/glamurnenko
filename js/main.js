// Header background changing for scroll
var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200){
        $(".header-row").css({"background": "rgba(0,0,0,.75)"})
    }
    if(200 > scrolled){
        $(".header-row").css({"background": "rgba(0,0,0,0)"})
    }

}