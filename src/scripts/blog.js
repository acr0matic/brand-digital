const blog = document.getElementById('blog');
if (blog) {
  const filters = blog.querySelectorAll('.blog__filters .blog-filters__item');
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      filter.classList.toggle('blog-filters__item--unselected');
    });
  });
}