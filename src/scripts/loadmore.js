const loadmore = document.getElementById('load-more');
const portfoliodGrid = document.querySelector('.portfolio-body__grid .row');
const blogWrapper = document.querySelector('.blog__wrapper');

loadContentAJAX(loadmore, portfoliodGrid);
loadContentAJAX(loadmore, blogWrapper);

function loadContentAJAX(trigger, container) {
  if (trigger && container) {
    const buttonText = loadmore.innerHTML;
    const buttonLoadingText = loadmore.getAttribute('data-loading-text');
    const maxPages = loadmore.getAttribute('data-max-pages');
    let page = parseInt(loadmore.getAttribute('data-paged'));

    const data = new FormData();
    data.append('action', 'more_post_ajax');
    data.append('type', container.getAttribute('data-type') || '');
    data.append('additional', container.getAttribute('data-additional') || '');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      data.append('page', page);

      trigger.innerHTML = buttonLoadingText;

      getPosts();
    });

    async function getPosts() {
      try {
        let response = await fetch(backend.ajaxurl, {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          page++;
          if (page == maxPages) loadmore.style.display = 'none';
        }

        let result = await response.text();
        container.insertAdjacentHTML('beforeend', result);
        MicroModal.init(modalParams);
        InitPortfolio();
        if (lazyLoadInstance) lazyLoadInstance.update();
      }

      // Логируем ошибку, если возникла
      catch (error) {
        console.error('Ошибка - ' + error);
      }

      // В любом случае убрать стили "отправки"
      finally {
        trigger.innerHTML = buttonText;
      }
    }
  }
}