$(document).ready(function () {
     $('span').click(function () {
         $('.color').toggleClass('activate');
     });
});

$(function(){
    $('#white').click(white);
    $('#blue').click(blue);    
    $('#black').click(black);
    $('#red').click(red);
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
    function red() {
    $('body').attr('class', 'red');
    }
    function purple() {
    $('body').attr('class', 'purple');
    }

    // $('span').click(function () {
    //     $('.color').fadeOut(600);
    // });
    // $('span').click(function () {
    //     $('.color').fadeIn(600);
    // });

    // $(window).scroll(function(){
    //     let scroll = $(this).scrollTop()
    //     console.log(scroll);
    //     if(scroll > 400){
    //         $(".bottom_to_top").fadeIn(600)
    //     }else{
    //         $(".bottom_to_top").fadeOut(600)
    //     }
    //     if(scroll > 200){
    //         $(".nav").addClass("fixed")
    //     }else{
    //         $(".nav").removeClass("fixed")
    //     }
    // })

})