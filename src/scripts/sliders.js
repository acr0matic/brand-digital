const hero = document.getElementById('hero');
if (hero) {
  const heroAction = hero.querySelectorAll('.hero__service');
  heroAction.forEach((action, index) => {
    action.addEventListener('click', (e) => {
      const activeCard = document.querySelector('.hero__service--active');

      if (e.currentTarget === activeCard) {
        heroSlider.slideTo(0);
        portfolioTabs.slideTo(0);
        activeCard.classList.remove('hero__service--active');
      }

      else {
        if (activeCard) activeCard.classList.remove('hero__service--active');
        action.classList.add('hero__service--active');

        heroSlider.slideTo(index + 1);
        portfolioTabs.slideTo(index);
        hero.style.backgroundImage = `url('/img/page/main/hero/bg/${index + 1}.png')`;
      }
    });
  });
}

if (window.matchMedia('(max-width: 576px)').matches) {
  const heroService = new Swiper('.hero-action-slider', {
    slidesPerView: 4,
    spaceBetween: 15,

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
  if (window.matchMedia('(min-width: 576px)').matches) {
    const portfolioThumbs = new Swiper(slider.querySelector('.portfolio-slider-thumb'), {
      allowTouchMove: true,
      centeredSlides: true,
      centeredSlidesBounds: true,

      speed: 500,
      slidesPerView: 2,
      spaceBetween: 15,

      slideToClickedSlide: true,
      nested: true,

      breakpoints: {
        991: {
          allowTouchMove: false,
          slidesPerView: 3,
        },

        1200: {
          allowTouchMove: false,
          slidesPerView: 4,
        },

        1540: {
          slidesPerView: 5,
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

    360: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    991: {
      slidesPerView: 5,
    },
  });

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

  function ChangeSlide(index) {
    let nextSlide = document.querySelector(`.advantages-slider .swiper-slide:nth-child(${index + 1})`);
    let prevSlide = document.querySelector(`.advantages-slider .swiper-slide:nth-child(${index - 1})`);

    if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) advantages.slideNext()
    else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) advantages.slidePrev()
  }
}

const priceSlider = new Swiper('.price-content-slider', {
  simulateTouch: false,
  speed: 500,
  slidesPerView: 1,
  roundLengths: true,

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