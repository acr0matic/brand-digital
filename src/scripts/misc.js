const scrollTopArrow = document.getElementById('scrollTop');
if (scrollTopArrow) {
  scrollTopArrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}