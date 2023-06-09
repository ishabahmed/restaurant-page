import './style.css';
import Logo from './logo.png';
import Location from './location.png';
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

function contact() {
  const content = document.querySelector('.content');

  const contactContent = document.createElement('div');
  contactContent.classList.add('contact-content');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us.';

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');

  const details = document.createElement('div');
  details.classList.add('details');

  const address = document.createElement('div');
  address.classList.add('address');

  const addressTitle = document.createElement('h3');
  addressTitle.textContent = 'Address';

  const addressDetails = document.createElement('span');
  addressDetails.textContent = `28 Queen's Gate
  South Kensington
  London
  SW7 5JA`;
  addressDetails.style.whiteSpace = 'pre-line';

  address.appendChild(addressTitle);
  address.appendChild(addressDetails);

  const openingHours = document.createElement('div');
  openingHours.classList.add('opening-hours');

  const openingHoursTitle = document.createElement('h3');
  openingHoursTitle.textContent = 'Opening Hours';

  const openingHoursDetails = document.createElement('span');
  openingHoursDetails.textContent = `Monday - Thursday: 8am to 11pm
  Friday: 8am to 12am
  Saturday: 9am to 12am
  Sunday: 9am to 11pm

  Bank Holidays: Open as usual`;
  openingHoursDetails.style.whiteSpace = 'pre-line';

  openingHours.appendChild(openingHoursTitle);
  openingHours.appendChild(openingHoursDetails);

  details.appendChild(address);
  details.appendChild(openingHours);

  const googleMaps = new Image();
  googleMaps.src = Location;

  contactInfo.appendChild(details);
  contactInfo.appendChild(googleMaps);

  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactInfo);

  content.appendChild(contactContent);
}

function addEventListeners() {
  const homeLink = document.querySelector('.header nav a:nth-child(1)');
  homeLink.addEventListener('click', () => {
    const content = document.querySelector('.content');

    content.innerHTML = '';
    header();
    home();
    addEventListeners();

    const currentLink = document.querySelector('.header nav a:nth-child(1)');
    currentLink.style.textDecoration = 'line-through';
    const menuLink = document.querySelector('.header nav a:nth-child(2)');
    menuLink.style.textDecoration = 'none';
    const contactLink = document.querySelector('.header nav a:nth-child(3)');
    contactLink.style.textDecoration = 'none';
  });

  const menuLink = document.querySelector('.header nav a:nth-child(2)');
  menuLink.addEventListener('click', () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    header();
    menu();
    addEventListeners();

    const homeLink = document.querySelector('.header nav a:nth-child(1)');
    homeLink.style.textDecoration = 'none';
    const currentLink = document.querySelector('.header nav a:nth-child(2)');
    currentLink.style.textDecoration = 'line-through';
    const contactLink = document.querySelector('.header nav a:nth-child(3)');
    contactLink.style.textDecoration = 'none';
  });

  const contactLink = document.querySelector('.header nav a:nth-child(3)');
  contactLink.addEventListener('mouseup', () => {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    header();
    contact();
    addEventListeners();

    const homeLink = document.querySelector('.header nav a:nth-child(1)');
    homeLink.style.textDecoration = 'none';
    const menuLink = document.querySelector('.header nav a:nth-child(2)');
    menuLink.style.textDecoration = 'none';
    const currentLink = document.querySelector('.header nav a:nth-child(3)');
    currentLink.style.textDecoration = 'line-through';
  });
}

function main() {
  init();
  header();
  home();
  addEventListeners();

  const homeLink = document.querySelector('.header nav a:nth-child(1)');
  homeLink.style.textDecoration = 'line-through';
}

main();
