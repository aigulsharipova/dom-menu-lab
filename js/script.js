const style = getComputedStyle(document.body);


let mainEl = document.querySelector('main');
mainEl.style.background = style.getPropertyValue('--main-bg');
mainEl.innerHTML+='<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');
let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = style.getPropertyValue('--top-menu-bg');
topMenuEl.classList.add('flex-around');
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

for (let i=0; i<menuLinks.length; i++)
  {
    let a = document.createElement('a');
    a.setAttribute('href', menuLinks[i].href);
    a.textContent=menuLinks[i].text;
    topMenuEl.appendChild(a);
  }
