window.addEventListener("load", () => {
  // --------------------------------
  // 사용 목적：햄버거 메뉴 클릭 함수
  // 사용 언어：javascript
  // --------------------------------
  const body = document.querySelector("body");
  const hamburgerMenu = document.querySelector(".header .menu-button");
  const hamburgerArea = document.querySelector(".hamburger-area");
  const hamburgerClose = document.querySelector(".hamburger-area .side-button .close");

  hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerArea.classList.add("active");
    body.classList.add("overflow-y-hidden");

    // 스크롤 시 클래스 추가
    hamburgerArea.addEventListener("scroll", () => {
      const sideNav = document.querySelector(".side-nav");

      const targetPosition = sideNav.getBoundingClientRect();
      if (targetPosition.top === 52) {
        console.log("ok")
        sideNav.classList.add("active");
      } else {
        sideNav.classList.remove("active");
      }
    });
  });

  hamburgerClose.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerArea.classList.remove("active");
    body.classList.remove("overflow-y-hidden");
  });
});