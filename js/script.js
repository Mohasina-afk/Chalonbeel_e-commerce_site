$(".navbar").hide();


$(".bar").click(function(){
    $(".navbar").fadeToggle();
}); 

// var hoverOrClick = function (){
//     $(".ddone").fadeToggle()
// }

// $(".subMenuBtn").click(hoverOrClick).hover(hoverOrClick);



//banner js @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fas fa-dove prev"></i>',
    nextArrow: '<i class="fas fa-dove next"></i>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});








//banner-snd part js @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});



//banner-snd part js @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
$('.cateslider_one').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});