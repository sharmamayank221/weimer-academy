const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const sub = document.querySelector('.nav-sub-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navSubLinks = document.querySelectorAll('.nav-sub-links li');
//    toggle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

         // animation nav links
    navLinks.forEach((link, index)=>{
        if (link.style.animation) {
           link.style.animation = ''
        } else {
           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
       
       })
     
         // Burger animation
    burger.classList.toggle('toggle');
    });
  

 
   
}

navSlide();


// slick carosel
$('.home-carosel-wrapper').slick({
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    dots:false,
    useTransform: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
      