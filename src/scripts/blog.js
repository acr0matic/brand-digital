const blog = document.getElementById('blog');
if (blog) {
  const container = blog.querySelector('.blog__wrapper');
  const filters = blog.querySelectorAll('.blog__filters .blog-filters__item');
  const data = new FormData();

  let activeFilters = [];

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.category;
      filter.classList.toggle('blog-filters__item--unselected');

      const active = blog.querySelectorAll('.blog-filters__item--unselected');
      if (active.length === 4 || active.length === 0) activeFilters = ['all'];
      else {
        if (activeFilters.includes('all')) activeFilters.splice(activeFilters.indexOf('all'), 1);

        if (!filter.classList.contains('blog-filters__item--unselected')) activeFilters.push(category);
        else if (activeFilters.includes(category)) activeFilters.splice(activeFilters.indexOf(category), 1);
      }

      console.log(activeFilters);
      filters.forEach(filterItem => filterItem.classList.add('blog-filters__item--disabled'));

      data.append('action', 'more_post_ajax');
      data.append('type', 'blog');
      data.append('additional', activeFilters);

      container.classList.add('blog__wrapper--loading');

      getPosts();

      async function getPosts() {
        try {
          let response = await fetch(backend.ajaxurl, {
            method: 'POST',
            body: data,
          });

          if (response.ok) {
            filters.forEach(filterItem => filterItem.classList.remove('blog-filters__item--disabled'));
            container.classList.remove('blog__wrapper--loading');

            container.innerHTML = '';
          }


          let result = await response.text();
          container.insertAdjacentHTML('beforeend', result);

          if (lazyLoadInstance) lazyLoadInstance.update();
        }

        // Логируем ошибку, если возникла
        catch (error) {
          console.error('Ошибка - ' + error);
        }
      }
    });
  });
}