
const portfolioList = [];
const portfolioTabs = new Swiper('.portfolio-slider-tab', {
  simulateTouch: false,
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
    slidesPerView: 5,
    spaceBetween: 15,

    // centerInsufficientSlides: true,

    slideToClickedSlide: true,

    nested: true,
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