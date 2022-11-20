  const сswiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 29,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const  swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
