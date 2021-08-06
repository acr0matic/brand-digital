Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

const videoContainer = document.querySelectorAll('.hero__motion');
let heroVideos = document.querySelectorAll('.hero__video:not([autoplay])');

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  videoContainer.forEach(container => {
    const videoSource = container.querySelector('.hero__motion source').src;
    const newSource = videoSource.replace(/motion/gi, 'motion/fallback').replace(/webm/gi, 'png');

    container.outerHTML = `<div class="hero__motion hero__motion--gif"><img class="hero__video" src="${newSource}" alt=""/></div>`;
  });
}