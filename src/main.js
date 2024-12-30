import "../src/style.css";
import Typed from 'typed.js'

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');
const Body = document.getElementsByName("body");

navBtn.addEventListener('click', ()=>{
    const isExpanded =JSON.parse(navBtn.getAttribute ('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})

/* Typed js hehehe */
const typed = new Typed('#element', {
  strings: ['<p>Equiping You To Grow Deeper In The Spirit And Walk In Dominion</p>.'],
  typeSpeed: 50,
  loop:false,
  backSpeed:0,
  showCursor:false,
  
});
/* Typed js hehehe */
const typedd = new Typed('#element2', {
  strings: ['What Are You Waiting For?'],
  typeSpeed: 50,
  loop:false,
  backSpeed:0,
  showCursor:false,
  
});
/* Typed js hehehe */
const typeddd = new Typed('#element3', {
  strings: ['Take the step to grow deeper in your relationship with God and unlock your purpose. Register now and join a community of believers on fire for Christ!'],
  typeSpeed: 50,
  loop:false,
  backSpeed:0,
  showCursor:false,
  
});


/* courses accordion*/


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === 'block';
    document.querySelectorAll('.accordion-content').forEach(c => (c.style.display = 'none')); // Close others
    content.style.display = isOpen ? 'none' : 'block'; // Toggle current
  });
});
