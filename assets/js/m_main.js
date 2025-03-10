window.addEventListener("load", () => {
  // --------------------------------
  // 사용 목적：네비게이션 이동
  // 사용 언어：javascript
  // --------------------------------
  const header = document.querySelector(".header");
  const targetElement = document.querySelector(".sec-insurance.car");
  const navContentsLink = document.querySelector(".nav-link");
  let lastScrollY = window.scrollY;


  const scrollY = targetElement.offsetTop;

  if (scrollY < lastScrollY) {
    navContentsLink.classList.add("active");
    header.classList.add("active");
  } else {
    navContentsLink.classList.remove("active");
  }

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const targetPosition = targetElement.offsetTop;

    // 스크롤 위치가 특정 요소의 위치를 지나면 클래스 추가
    if (currentScrollY >= 0 && currentScrollY <= targetPosition) {
      navContentsLink.classList.remove("active")
      if (currentScrollY < lastScrollY) {
        // 위로 스크롤할 때
        if (currentScrollY === 0) {
          header.classList.remove("active");
        } else {
          header.classList.remove("active");
        }
      } else if (currentScrollY !== 0) {
        // 아래로 스크롤할 때
        header.classList.add("active");
      }
    } else {
      // 구간을 벗어났을 때
      header.classList.add("active");
      navContentsLink.classList.add("active")
    }

    // 현재 스크롤 위치 저장
    lastScrollY = currentScrollY;
  });

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