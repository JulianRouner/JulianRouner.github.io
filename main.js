$(function(){
    var stickyHeaderTop = $('#stickytypeheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickytypeheader').css({position: 'fixed', top: '0px'});
                    //$('#sticky').css('display', 'block');
            } else {
                    $('#stickytypeheader').css({position: 'static', top: '0px'});
                    //$('#sticky').css('display', 'none');
            }
    });
});

window.onscroll = function() {rounerScroll()};

var header = document.getElementById("stickyTypeHeader");

var sticky = header.offsetTop;

/*function myFunction() {
        if (window.pageYOffset > sticky) {
                header.style.position == ;
        } 
        else {
                header.classList.remove("sticky");
        }
}*/