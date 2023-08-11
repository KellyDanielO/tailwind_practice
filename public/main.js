const btn = document.getElementById('menu-btn')
const nav = document.querySelector('.hm_menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('active')
//   nav.classList.toggle('hidden')
})
window.addEventListener('resize', ()=>{
    if (window.screen.width > 1024) {
        btn.classList.remove('open');
        nav.classList.remove('active');
    }
});
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);