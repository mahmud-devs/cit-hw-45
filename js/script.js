$(document).ready(function () {
     $('.setting').click(function () {
         $('.color').toggleClass('activate');
         $('.setting').toggleClass('activation');
     });
});

$(function(){
    $('#white').click(white);
    $('#blue').click(blue);    
    $('#black').click(black);
    $('#orange').click(orange);
    $('#purple').click(purple);


    function white() {
    $('body').attr('class', 'white');
    }
    function blue() {
    $('body').attr('class', 'blue');
    }    
    function black() {
    $('body').attr('class', 'black');
    }
    function orange() {
    $('body').attr('class', 'orange');
    }
    function purple() {
    $('body').attr('class', 'purple');
    }


  
});


$(function(){
    // bottom to top
    $(".bottom_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll);
        if(scroll > 800){
            $(".bottom_to_top").fadeIn(600)
        }else{
            $(".bottom_to_top").fadeOut(600)
        }
        // if(scroll > 200){
        //     $(".nav").addClass("fixed")
        // }else{
        //     $(".nav").removeClass("fixed")
        // }
    })

});