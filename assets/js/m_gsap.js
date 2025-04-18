window.addEventListener("load", () => {
  // ------------------------------------------------------
  // 사용 목적：네비게이션 드래그
  // 사용 언어：javascript + gsap.js
  // ------------------------------------------------------
  const list = document.querySelector(".hamburger-area .side-nav .list");
  const nav = document.querySelector(".hamburger-area .side-nav");
  const paddingRight = 32; // 드래그 시 오른쪽 여백

  let draggableInstance;

  function initDraggable() {
    const listWidth = list.scrollWidth;
    const navWidth = nav.clientWidth;

    // 기존 인스턴스 제거
    if (draggableInstance) {
      draggableInstance.kill();
      draggableInstance = null;
      gsap.set(list, { x: 0 }); // 위치 초기화
    };

    // listWidth가 navWidth를 넘을 때만 Draggable 적용
    if (listWidth > navWidth) {
      const maxX = 0;
      const minX = (navWidth - listWidth) - paddingRight; // 여백 만큼 더 빼기

      draggableInstance = Draggable.create(list, {
        type: "x",
        bounds: { minX, maxX },
        inertia: true,
        cursor: "grab"
      })[0]; // 첫 번째 Draggable 인스턴스 저장
    };
  };

  initDraggable();

  window.addEventListener("resize", () => {
    initDraggable(); // 리사이즈 시 다시 실행
  });

  // ------------------------------------------------------
  // 사용 목적：햄버거 메뉴 클릭 시 네비게이션 클릭 및 메뉴 이동
  // 사용 언어：javascript + gsap.js
  // ------------------------------------------------------
  const hamburgerMenu = document.querySelector(".header .menu-button");
  const hamburgerArea = document.querySelector(".hamburger-area");
  const sideNav = document.querySelector(".side-nav");

  hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault();

    let links = gsap.utils.toArray("#side-nav ul li a");
    const newArray = links.filter((item, index) => {
      return item.className === "link";
    });

    links = newArray;

    links.forEach(link => {
      let element = document.querySelector(link.getAttribute("href"));
      let linkST = ScrollTrigger.create({
        trigger: element,
        start: "-100px 0", // 위치
      });

      hamburgerArea.addEventListener("scroll", (e) => {
        ScrollTrigger.create({
          trigger: element,
          start: "0% 50%",
          end: "100% 50%",
          onToggle: (self) => {
            setActive(link);
          },
        });
      });

      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(hamburgerArea, {
          duration: 1,
          scrollTo: linkST.start,
          overwrite: "auto"
        });
      });
    });

    function setActive(link) {
      links.forEach((element) => {
        element.classList.remove("active");
      });

      const targetPosition = sideNav.getBoundingClientRect();
      if (52 === targetPosition.top) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      };
    };
  });
});