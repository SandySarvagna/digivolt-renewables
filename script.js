const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(!!open));
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#enquiryForm');

form?.addEventListener('submit', e => {
  e.preventDefault();

  const d = new FormData(form);

  const msg = [
    'Hello DigiVolt Renewables, I would like to discuss a project.',
    '',
    'Name: ' + (d.get('name') || ''),
    'Phone: ' + (d.get('phone') || ''),
    'Email: ' + (d.get('email') || ''),
    'Requirement: ' + (d.get('requirement') || ''),
    'Message: ' + (d.get('message') || '')
  ].join('\n');

  window.open(
    'https://wa.me/918861095355?text=' + encodeURIComponent(msg),
    '_blank',
    'noopener'
  );
});document.querySelector('.menu')?.addEventListener('click',()=>{const n=document.querySelector('.nav nav');if(n){n.style.display=n.style.display==='flex'?'none':'flex';n.style.flexDirection='column';n.style.position='absolute';n.style.top='68px';n.style.right='13px';n.style.background='#fff';n.style.padding='18px';n.style.border='1px solid #dce2e5';n.style.borderRadius='12px';}});
