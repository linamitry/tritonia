
$(document).ready(function(){
    // $('.slider').slick();
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 0.2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipeToSlide: true,
        draggable: true,
        touchThreshold: 10,
        //variableWidth: true,
      });

    $('.slider__item').on( 'mouseover', hoverOn ) 
    $('.slider__item').on( 'mouseout', hoverOff ) 

});

function hoverOn(){
    $(this).addClass("visible");
    $('.slider-btn', this).addClass("visible");
    $('.slider-text', this).addClass("visible");
}
function hoverOff(){
    $(this).removeClass("visible")
    $('.slider-btn', this).removeClass("visible")
    $('.slider-text', this).removeClass("visible")
}


$('.kitchen-slider').slick({
    //lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'<button type="button" class="slick-btn slick-btn__back"></button>',
    nextArrow:'<button type="button" class="slick-btn slick-btn__next"></button>',
  });

  $('.instagram-events-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    

  });

  
 

//   $('.kitchen-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//     console.log(event)
//     console.log(slick)
//     console.log(currentSlide)
//     console.log(nextSlide)
  
//     console.log(this)
  
    // if (typeof activeIndex !== "undefined" && !(activeIndex == zoneIndexes[0] || activeIndex == zoneIndexes[1])) {
    //   $('.slide').removeClass('active');
    // }
//   });