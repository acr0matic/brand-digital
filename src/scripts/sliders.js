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

const portfolioList = [];
const portfolioTabs = new Swiper('.portfolio-slider-tab', {
  simulateTouch: false,
  allowTouchMove: false,
  roundLengths: true,
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.portfolio-slider-tab .swiper-pagination',
    clickable: true,

    renderBullet(index, className) {
      return `<span class="${className}">${portfolioList[index]}</span>`;
    },
  },

  on: {
    init() {
      const data = "data-title";
      const wrapper = document.querySelector('.portfolio-slider-tab');
      const slides = wrapper.querySelectorAll(`[${data}]`);
      slides.forEach((slide) => {
        portfolioList.push(slide.getAttribute(data));
      });
    },
  },
});

const portfolioSliders = document.querySelectorAll('.portfolio-slider-tab [data-title]');
portfolioSliders.forEach(slider => {
  if (window.matchMedia('(min-width: 991px)').matches) {
    const portfolioThumbs = new Swiper(slider.querySelector('.portfolio-slider-thumb'), {
      allowTouchMove: false,
      centeredSlides: true,
      centeredSlidesBounds: true,

      speed: 500,
      slidesPerView: 2,
      spaceBetween: 15,

      slideToClickedSlide: true,
      nested: true,

      breakpoints: {
        768: {
          slidesPerView: 3,
        },

        991: {
          slidesPerView: 4,
        },

        1200: {
          slidesPerView: 5,
        },

        1540: {
          slidesPerView: 6,
        },
      },
    });

    const portfolioItems = new Swiper(slider.querySelector('.portfolio-slider-items'), {
      navigation: {
        nextEl: '.portfolio-slider-next',
        prevEl: '.portfolio-slider-prev',
      },

      thumbs: {
        swiper: portfolioThumbs
      },

      slidesPerView: 1,
      speed: 500,

      nested: true,
      simulateTouch: false,

      on: {
        slideChange: function () {
          let activeIndex = this.activeIndex + 1;

          let nextSlide = document.querySelector(`.portfolio-slider-thumb .swiper-slide:nth-child(${activeIndex + 1})`);
          let prevSlide = document.querySelector(`.portfolio-slider-thumb .swiper-slide:nth-child(${activeIndex - 1})`);

          if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible'))
            this.thumbs.swiper.slideNext()
          else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible'))
            this.thumbs.swiper.slidePrev()
        }
      }
    });
  }
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

const processCertificates = new Swiper('.process-slider--certificates', {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.process-slider-controls--certificates .process-slider-next--orange',
    prevEl: '.process-slider-controls--certificates .process-slider-prev--orange',
  },
});

const processFeedback = new Swiper('.process-slider--feedback', {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.process-slider-controls--feedback .process-slider-next--orange',
    prevEl: '.process-slider-controls--feedback .process-slider-prev--orange',
  },
});

const assemblySlider = new Swiper('.assembly-slider', {
  loop: true,
  speed: 500,
  spaceBetween: 25,
  slidesPerView: 'auto',
  centeredSlides: true,
  centeredSlidesBounds: true,
  grabCursor: true,
});