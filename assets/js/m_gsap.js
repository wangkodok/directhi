window.addEventListener("load", () => {
  // ------------------------------------------------------
  // 사용 목적：네비게이션 드래그
  // 사용 언어：gsap.js
  // ------------------------------------------------------

  // GSAP Draggable 플러그인 등록
  gsap.registerPlugin(Draggable);

  // 드래그 가능한 콘텐츠 선택
  const dragContent = document.querySelector(".nav-link .list");
  const container = document.querySelector(".nav-link");

  // 컨테이너 및 콘텐츠 크기 계산
  const containerStyle = getComputedStyle(container);
  const paddingLeft = parseFloat(containerStyle.paddingLeft);
  const paddingRight = parseFloat(containerStyle.paddingRight);
  const marginLeft = parseFloat(containerStyle.marginLeft);
  const marginRight = parseFloat(containerStyle.marginRight);

  // Draggable 생성
  Draggable.create(dragContent, {
    type: "x",
    bounds: {
      minX: -(dragContent.offsetWidth - container.clientWidth + paddingRight + marginRight), // 오른쪽 끝 계산
      maxX: paddingLeft + marginLeft, // 왼쪽 끝 계산
    },
    inertia: true, // 관성 효과
    edgeResistance: 0.65, // 끝 저항력
  })

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