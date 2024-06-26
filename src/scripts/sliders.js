const hero = document.getElementById('hero');
if (hero) {
  const heroAction = hero.querySelectorAll('.hero__service');
  const slides = hero.querySelectorAll('.hero-slider .swiper-slide');

  heroAction.forEach((action, index) => {
    action.addEventListener('click', (e) => {
      const backgroundURL = slides[index + 1].getAttribute('data-bg');
      if (!heroVideos[index].playing) heroVideos[index].play();

      const activeCard = document.querySelector('.hero__service--active');

      if (e.currentTarget === activeCard) {
        heroSlider.slideTo(0);
        portfolioTabs.slideTo(0);
        activeCard.classList.remove('hero__service--active');
        hero.style.backgroundImage = `url(${slides[0].getAttribute('data-bg')})`;
      }

      else {
        if (activeCard) activeCard.classList.remove('hero__service--active');
        action.classList.add('hero__service--active');

        heroSlider.slideTo(index + 1);
        portfolioTabs.slideTo(index);
        hero.style.backgroundImage = `url(${backgroundURL})`;
      }
    });
  });
}

if (window.matchMedia('(max-width: 576px)').matches) {
  const heroService = new Swiper('.hero-action-slider', {
    slidesPerView: 4,
    spaceBetween: 15,
    roundLengths: true,

    navigation: {
      nextEl: '.hero-action-next',
      prevEl: '.hero-action-prev',
    },
  });
}

const heroSlider = new Swiper('.hero-slider', {
  simulateTouch: false,
  speed: 500,
  slidesPerView: 1,
  roundLengths: true,
  allowTouchMove: false,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const portfolioTab = [];
const portfolio = new Swiper('.slider-portfolio.swiper', {
  simulateTouch: false,
  allowTouchMove: false,
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.slider-portfolio-control .swiper-pagination',
    clickable: true,

    renderBullet(index, className) {
      return `<span class="${className}">${portfolioTab[index]}</span>`;
    },
  },

  on: {
    beforeInit(instance) {
      const slides = instance.el.querySelectorAll(`[data-title]`);
      slides.forEach((slide) => portfolioTab.push(slide.dataset.title));
    },
  },
});


if (window.matchMedia('(max-width: 1200px)').matches) {
  const advantageCards = document.querySelectorAll('.advantages__item');
  const advantageMobile = document.querySelector('.advantages-mobile');
  const advantageMobileItems = document.querySelectorAll('.advantages-mobile__item');

  const advantages = new Swiper('.advantages-slider', {
    speed: 500,
    slidesPerView: 2,
    slideToClickedSlide: true,

    spaceBetween: 20,

    watchSlidesVisibility: true,

    pagination: {
      el: '.advantages-slider__pagination',
    },

    breakpoints: {
      360: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 4,
      },

      991: {
        slidesPerView: 5,
      },
    }
  });

  if (window.matchMedia('(max-width: 991px)').matches) {
    advantageCards.forEach((card, index) => {
      card.addEventListener('click', () => {
        ChangeSlide(index + 1);

        const activeCard = document.querySelector('.advantages__item--active');
        const activeMobile = document.querySelector('.advantages-mobile__item--active');

        if (activeCard) activeCard.classList.remove('advantages__item--active');
        if (activeMobile) activeMobile.classList.remove('advantages-mobile__item--active');

        card.classList.add('advantages__item--active');
        advantageMobile.classList.add('advantages-mobile--active');
        advantageMobileItems[index].classList.add('advantages-mobile__item--active');
      });
    });
  }

  function ChangeSlide(index) {
    let nextSlide = document.querySelector(`.advantages-slider .swiper-slide:nth-child(${index + 1})`);
    let prevSlide = document.querySelector(`.advantages-slider .swiper-slide:nth-child(${index - 1})`);

    if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) advantages.slideNext()
    else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) advantages.slidePrev()
  }
}

const priceSlider = new Swiper('.price-content-slider', {
  simulateTouch: false,
  allowTouchMove: false,
  speed: 500,
  slidesPerView: 1,
  roundLengths: true,
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const promotionsSlider = new Swiper('.slider-promotions', {
  simulateTouch: false,
  allowTouchMove: false,

  speed: 500,
  slidesPerView: 1,
  spaceBetween: 30,
});

const processSliderWide = new Swiper('.process-slider--wide', {
  // simulateTouch: false,

  centeredSlides: true,

  speed: 500,
  slidesPerView: 'auto',


  navigation: {
    nextEl: '.process-slider-next--white',
    prevEl: '.process-slider-prev--white',
  },

  on: {
    afterInit: function () {
      let index = this.slides.length / 2;
      this.slideTo(index);
    }
  },
});

const processSliderCommon = new Swiper('.process-slider--common', {
  centeredSlides: true,
  autoHeight: true,

  speed: 500,
  spaceBetween: 50,
  slidesPerView: 1,

  navigation: {
    nextEl: '.process-slider-next--orange',
    prevEl: '.process-slider-prev--orange',
  },

  pagination: {
    el: '.process-slider--common .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const processSliderSmall = new Swiper('.process-slider--small', {
  simulateTouch: false,
  allowTouchMove: false,
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 1,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

if (window.matchMedia('(max-width: 991px)').matches) {
  const warantySlider = document.querySelectorAll('.process-slider--warranty');
  warantySlider.forEach(slider => {
    new Swiper(slider, {
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 15,
    });
  });
}

const assemblySlider = new Swiper('.assembly-slider', {
  loop: true,
  speed: 500,
  spaceBetween: 10,

  slidesPerView: 'auto',

  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      spaceBetween: 25,
      centeredSlides: true,
    },
  },
});

const heroDesignSlider = new Swiper('.hero--design .hero__price .swiper', {
  speed: 500,
  spaceBetween: 20,

  slidesPerView: 1.25,

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    768: {
      spaceBetween: 25,
      slidesPerView: 3,
    },
  },
});