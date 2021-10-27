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
    const newSource = container.getAttribute('data-safari');
    container.innerHTML = `<img class="hero__video" src="${newSource}"/>`;
  });
}