window.addEventListener("load", function () {
  new Swiper(".swiper-mobileBanner", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true,
  });
});