const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    // if menu isn't showing then show it
    menu.classList.remove('hidden');
  } else {
    // if menu is showing then hide it
    menu.classList.add('hidden');
  }
});
