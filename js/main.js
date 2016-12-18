$(function() {
    
    $(window).scroll(function(){
     
/*robie pętle żeby po scrollowaniu 50px ma zmienić kolor */
        if ($(window).scrollTop() >= 50){
            
            $("#main-nav").addClass('scroll');
            
        }else {
            
            $("#main-nav").removeClass('scroll');
        }
    });
    
    var root = $('html, body');
    $('a[href^="#"]').click(function() {
        
        //console.log("kliknięcie");
        
        var href = $(this).attr("href");
        root.animate({scrollTop : $(href).offset().top -52}, 500);
        
    });
        
   
});