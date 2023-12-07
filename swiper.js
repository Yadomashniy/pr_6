var swiper = new Swiper(".mySwiper", {
	pagination: {
	  el: ".swiper-pagination",
	},
	slidesPerView: 'auto',
    spaceBetween: 16,
    observer: true,
    breakpoints: {
      768: {
        spaceBetween: 0,
        enabled: false
      },
    },
  })