import './style.css';
import Logo from './logo.png';

function header() {
  const content = document.createElement('div');
  content.classList.add('content');

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

  document.body.appendChild(content);
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

header();
home();
