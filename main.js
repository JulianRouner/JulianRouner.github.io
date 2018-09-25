$(function(){
    var stickyHeaderTop = $('#stickytypeheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickytypeheader').css({position: 'fixed', top: '0px'});
                    //$('#sticky').css('display', 'block');
            }
            else {
                    $('#stickytypeheader').css({position: 'static', top: '0px'});
                    //$('#sticky').css('display', 'none');
            }
    });
});

window.onscroll = function() {stiq()};

var header = document.getElementById("stickyTypeHeader");

var sticky = header;

function stiq () {
        if (window.pageYOffset > sticky) {
                header.classList.add("sticky")
        }
        else {
                header.classList.remove("sticky");
        }
}
