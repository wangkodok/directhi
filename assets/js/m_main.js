window.addEventListener("load", () => {
  // --------------------------------
  // 사용 목적：네비게이션 이동
  // 사용 언어：javascript
  // --------------------------------
  const header = document.querySelector(".header");
  const targetElement = document.querySelector(".sec-insurance.car");
  const navContentsLink = document.querySelector(".nav-link");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const targetPosition = targetElement.offsetTop;

    // 스크롤 방향 판별
    const isScrollingUp = currentScrollY < lastScrollY;

    // 특정 구간 내에 있을 경우
    if (currentScrollY >= 0 && currentScrollY <= targetPosition) {
      navContentsLink.classList.remove("active");

      if (isScrollingUp) {
        // 위로 스크롤할 때
        header.classList.add("active");

        // 최상단으로 올라갔을 때는 숨김 (원하면 유지 가능)
        if (currentScrollY === 0) {
          header.classList.remove("active");
        } else {
          header.classList.remove("active");
        }
      } else {
        // 아래로 스크롤할 때
        header.classList.add("active");
      }
    } else {
      // targetPosition을 지나면 항상 활성화 상태 유지
      header.classList.add("active");
      if (currentScrollY === 0) {
        navContentsLink.classList.remove("active");
      } else {
        navContentsLink.classList.add("active");
        alert("모바일 환경에서 상단 오류 발생 감지");
      }
    }

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