// Обьявлаем переменные для работы
let body = document.querySelector('body');
let header = body.querySelector('.header');

let menu = header.querySelector('.burger-menu');
let btn = menu.querySelector('.burger-menu__button');
let links = menu.querySelectorAll('.burger-menu__link');
let overlay = menu.querySelector('.burger-menu__overlay');

// Добавляем слушатель событий
btn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', toggleMenu);
}
// Прижимает header к верху страницы при скролле вниз
window.addEventListener('scroll', headerPosition);

// Разрешает прокрутку, если с открытым меню изменить ширину
window.addEventListener('resize', () => {
  headerPosition();
  toggleOverflow();
});

// Функция переключения меню вкл/выкл
function toggleMenu() {
  if (screen.width <= 800) {
    // Переключения меню
    menu.classList.toggle('burger-menu__active');
    // Запрещает/разрешает скролл страницы
    toggleOverflow();
  }
}

// Функция для установки отступа сверху для header
function headerPosition() {
  if (screen.width <= 800) {
    if (this.pageYOffset >= 40 || (screen.width > screen.height)) {
      header.style.top = '0px';
    } else {
      header.style.top = 40 - this.pageYOffset + 'px';
    }
  }
  else if (screen.width > 800) {
    header.style.top = '40px';
  }
}

// Функция, которая определяет можно скролить страницу или нет
function toggleOverflow() {
  if (body.querySelector('.burger-menu__active') && screen.width <= 800) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
}
