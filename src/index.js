import './style.css';
import Logo from './logo.png';
import Menu from './menu.csv';

function init() {
  const content = document.createElement('div');
  content.classList.add('content');
  document.body.appendChild(content);
}

function header() {
  const content = document.querySelector('.content');

  const header = document.createElement('div');
  header.classList.add('header');

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = 'সান্ত্বনা';

  const nav = document.createElement('nav');

  const home = document.createElement('a');
  home.textContent = 'Home';
  home.classList.add('active');
  home.setAttribute('href', '#');
  nav.appendChild(home);

  const menu = document.createElement('a');
  menu.textContent = 'Menu';
  menu.setAttribute('href', '#');
  nav.appendChild(menu);

  const contact = document.createElement('a');
  contact.textContent = 'Contact';
  contact.setAttribute('href', '#');
  nav.appendChild(contact);

  header.appendChild(title);
  header.appendChild(nav);

  content.appendChild(header);
}

function home() {
  const content = document.querySelector('.content');
  const main = document.createElement('main');
  main.classList.add('main');
  const title = document.createElement('div');
  title.classList.add('title');

  const logo = new Image();
  logo.src = Logo;

  const h2 = document.createElement('h2');
  h2.textContent = 'Solace.';

  title.appendChild(logo);
  title.appendChild(h2);

  main.appendChild(title);

  content.appendChild(main);
}

function menu() {
  const content = document.querySelector('.content');

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Menu.';

  const menuItems = document.createElement('div');
  menuItems.classList.add('menu');

  Menu.forEach((item) => {
    if (item[0] === 'name') return;

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('span');
    itemName.classList.add('menu-item-name');
    itemName.textContent = item[0];

    const itemDescription = document.createElement('span');
    itemDescription.classList.add('menu-item-description');
    itemDescription.textContent = item[1];

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('menu-item-price');
    itemPrice.textContent = item[2];

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);

    menuItems.appendChild(menuItem);
  });

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(menuItems);

  content.appendChild(menuContent);
}

init();
header();
home();
