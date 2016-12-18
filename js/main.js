$(function() {
    $(window).scroll(function(){
     
/*robie pętle żeby po scrollowaniu 50px ma zmienić kolor */
        if ($(window).scrollTop() >= 50){
            $("#main-nav").addClass('scroll');
        }else {
            $("#main-nav").removeClass('scroll');
        }
    });
   
});