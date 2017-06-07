// Set height of module jumbo
function sectionHeight() {
    if (window.innerWidth > 767) {
        var h = window.innerHeight;
        var windowHeight = "height:" + h + "px";

        var modules = [
            $('.jumbo__content')
        ];

        for (var i = 0; i < modules.length; i++) {
            modules[i].attr('style', windowHeight);
        }
    }
};
sectionHeight();

window.addEventListener('resize', function(){
  sectionHeight();
})
