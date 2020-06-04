let navToggle = document.querySelector('.nav__toggle');
let toggleIcon = document.querySelector('.nav__toggle-icon');
let navItems = document.querySelector('.nav__items');
let navOverlay = document.querySelector('.nav__overlay');
let siteBody = document.querySelector('body');

window.onload=function(){

  // ------ Navigation ------ //
  let toggleNav = function () {
    toggleIcon.classList.toggle('is-active');
    navItems.classList.toggle('open');
    siteBody.classList.toggle('no-scroll');
    navOverlay.classList.toggle('active');
  };

  // Nav Toggler
  navToggle.addEventListener('click', toggleNav);

  // Resize
  window.addEventListener('resize', function(event){
    if (window.innerWidth > 767 && navItems.classList.contains('open')) {
      toggleNav();
    }
  });

  // ------ SmoothScroll ------ //
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top,
    }, 500);
  });

} // End winload onload