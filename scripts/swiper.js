const swiper = new Swiper(".swiper", {
    // Optional parameters

    loop: true,

    autoplay: {
      delay: 5000, // Delay between transitions (in milliseconds)
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
