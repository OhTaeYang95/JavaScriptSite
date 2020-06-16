'use strict';

//  Make Navbar Transparent when it is on the Top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 네브 보더 박스랑 데이터 포이치 두군데서 사용되는 변수이므로 전역으로 빼놓음
// 셀렉트올을 사용하시면 배열을 만들어 준답니다 ㅎㅎ
// const dataTagetName = document.querySelectorAll('.navbar__menu__item');

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle Scrolling When Tapping on The Navbar Menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//    위에 이프랑 상관없는 별개의 조건이므로 이프를 새로 주어야 한다.
//    밑에 붙여봤자 리턴돼서 끝나유 ㅠㅠ 작동안함 ㅠㅠ
//      이프인 이유는... 이프는 괄호안에 넣은게 참이면 실행을 하라는 의미라 바로 실행시킬수 있는데
//      스위치는 주어진 조건과 케이스안에 내용이 맞냐 안맞냐 거든요... 필요한 조건이 하나여서
//       대조할게 없어서... 구현을 어떻게 해야할지 잘 모르겠어서 이프를 썼습니다.
// if (event.target.dataset.link) {
//   // 조건문을 여기서 구현하면 가독성이 떨어지기도 하고... 함수안에 많은 내용이 들어가는게 좋지 않다고
//   // 생각을 하므로 따로 함수를 만들어 구현하였어요
//   navbarBoaderBox();
// }

// function navbarBoaderBox() {
//   // 비교할때 필요하고, 이 한군데서만 사용이 되므로 지역변수로 선언!
//   const dataLinkName = event.target.dataset.link;
//   //    이프로 조건문을 만들어도 되나... 개인적(?)으로 생각하기에 조건의 갯수가 명확한것은
//   //   스위치를 사용하는 것이 좋고, 크고 작음 같이 조건의 기준만 있을 뿐 명확하지 않은것은
//   //    이프를 사용하는 것이 좋다고 생각을 하여 스위치를 사용함
//   //  무슨무슨~조건 해가지고 학문적으로 차이가 있는건데요 배웠다고 해도...
//   //  어제 저녁에 뭐 먹었는지도 기억 안나유... ㅋㅋㅋㅋ
//   //  큰 줄기를 보고, 원리를 알고 사용을 한다는게 중요하다고 생각합니다 ㅎㅎ
//   switch (dataLinkName) {
//     case '#home':
//       //이것도 마찬가지로 똑같은 내용이 계속 반복되므로 함수로 따로 뺏어요~
//       dataTagetForEach();
//       dataTagetName[0].classList.add('active');
//       break;
//     case '#about':
//       dataTagetForEach();
//       dataTagetName[1].classList.add('active');
//       break;
//     case '#skills':
//       dataTagetForEach();
//       dataTagetName[2].classList.add('active');
//       break;
//     case '#work':
//       dataTagetForEach();
//       dataTagetName[3].classList.add('active');
//       break;
//     case '#testimonials':
//       dataTagetForEach();
//       dataTagetName[4].classList.add('active');
//       break;
//     case '#contact':
//       dataTagetForEach();
//       dataTagetName[5].classList.add('active');
//       break;
//     default:
//       break;
//   }
// }

// function dataTagetForEach() {
//   // 포이치가 뭔지는 엘리님의 영상을 확인해주세요!
//   // https://www.youtube.com/watch?v=yOdAVDuHUKQ&t=939s
//   dataTagetName.forEach(function (dataTaget) {
//     dataTaget.classList.remove('active');
//   });
// }

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home', { behavior: 'smooth' });
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const Projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  // projectContainer.classList.add('anim-out');

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  if (active !== null) {
    active.classList.remove('selected');
  }
  active.classList.remove('selected');
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    Projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisivle');
      } else {
        project.classList.add('invisivle');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'center',
  });
}
