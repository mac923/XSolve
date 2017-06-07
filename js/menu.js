// Menu open
menu = function() {
    var nav = $('.l-header__nav');
    var btn = $('#l-header__menu-btn')

    btn.click(function(){
        nav.toggleClass('is-open');
        btn.toggleClass('is-open');
    })
}();
