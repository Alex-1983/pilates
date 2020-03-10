'use strict';

(function() {
  var reviews = document.querySelector(".reviews");
  var reviewsSlider = reviews.querySelector(".swiper-container");
  var pagination = reviews.querySelector(".swiper-pagination");
  var buttonPrevious = reviews.querySelector(".slider-toggles__btn--prev");
  var buttonNext = reviews.querySelector(".slider-toggles__btn--next");

  var reviewsSwiper = new Swiper(reviewsSlider, {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrevious
    },

    pagination: {
      el: pagination,
      clickable: true,
    }
  });

})();
