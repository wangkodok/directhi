window.addEventListener("load", function () {
  const sliderLink = document.querySelector(".slider-link");
  const toggleButton = document.querySelector(".slider-play-button");
  let isPlaying = true;

  sliderLink.addEventListener("click", (event) => {
    event.preventDefault();
  })

  const swiper = new Swiper(".swiper-introBanner", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    loop: true,
    autoplay: true,
  });

  toggleButton.addEventListener("click", () => {
    if (isPlaying) {
      swiper.autoplay.stop(); // 재생
      toggleButton.classList.add("passive");
      toggleButton.classList.remove("active");
    } else {
      swiper.autoplay.start(); // 정지
      toggleButton.classList.add("active");
      toggleButton.classList.remove("passive");
    }

    isPlaying = !isPlaying;
  });
});