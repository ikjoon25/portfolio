const swiper = new Swiper('.swiper1', {
  // Optional parameters
  /* direction: 'vertical', */
  loop: true,
  autoplay:{
      delay: 2000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

var swiper2 = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    autoplay:{
        delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


