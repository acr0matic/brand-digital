const hero = document.getElementById('hero');
const heroAction = hero.querySelectorAll('.hero__service');
heroAction.forEach((action, index) => {
  action.addEventListener('click', () => {
    const activeCard = document.querySelector('.hero__service--active');

    if (activeCard) activeCard.classList.remove('hero__service--active');
    action.classList.add('hero__service--active');

    heroSlider.slideTo(index);
    hero.style.backgroundImage = `url('/src/img/page/main/hero/bg/${index + 1}.png')`;
  });
});

const heroSlider = new Swiper('.hero-slider', {
  simulateTouch: false,
  speed: 500,
  slidesPerView: 1,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});


const portfolioList = [];
const portfolioTabs = new Swiper('.portfolio-slider-tab', {
  simulateTouch: false,
  allowTouchMove: false,

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
  const portfolioThumbs = new Swiper(slider.querySelector('.portfolio-slider-thumb'), {
    allowTouchMove: false,
    centeredSlides: true,
    centeredSlidesBounds: true,

    speed: 500,
    slidesPerView: 4,
    spaceBetween: 15,

    slideToClickedSlide: true,
    nested: true,

    breakpoints: {
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
});

if (window.matchMedia('(max-width: 1200px)').matches) {
  const advantageCards = document.querySelectorAll('.advantages__item');
  const advantageMobile = document.querySelector('.advantages-mobile');
  const advantageMobileItems = document.querySelectorAll('.advantages-mobile__item');

  const advantages = new Swiper('.advantages-slider', {
    speed: 500,
    slidesPerView: 5,
    slideToClickedSlide: true,

    spaceBetween: 20,

    watchSlidesVisibility: true,

    pagination: {
      el: '.advantages-slider__pagination',
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