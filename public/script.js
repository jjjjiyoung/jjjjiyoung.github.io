// alert("message1");

$('document').ready(function(){
    $(".top").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
            },1000 );
    $(".top").mouseover(function(){
        $(this).css("color","black");
    });
    
    $(".top").mouseleave(function(){
        $(this).css("color","gray");
    });
});
});