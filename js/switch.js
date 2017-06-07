// Switch between rtl and ltr
switcher = function() {
    var switcher = $('.o-switcher');
    var allElem = $('body');
    var checkbox = $('#switcher');
    var header = $('.l-header');

    switcher.click(function() {

        if (checkbox.prop( "checked" )) {
            allElem.css( "direction", "rtl" );
            header.addClass('rtl');
        } else {
            allElem.css("direction", "ltr");
            header.removeClass('rtl');
        }
    });
}();
