$(document).ready(()=>{
    //sticky nav
    let navbar = $("#nav-bar");
    let stickyOffset = navbar.offset().top;
  
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > stickyOffset) {
            navbar.addClass("sticky");
            $("body").css("padding-top", navbar.outerHeight() + "px"); // Prevent content jump
        } else {
          navbar.removeClass("sticky").css("position", "relative"); // Reset position
          $("body").css("padding-top", "0");
        }
    });
})
  
  
  //hamburger menu
  const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    //close when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburgerMenu.contains(e.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
        navMenu.classList.remove('active');
        }
    });


//scroll percentage
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.round((scrollTop / scrollHeight) * 100);
    document.getElementById('scroll-percent').textContent = `${scrolled}%`;
  });


//skills carousel
    const carousel = document.querySelector('.skills-carousel');
    let isDown = false;
    let startX, scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });