let href, index, item, itemPos;

function GetHash() {
  href = window.location.hash.substr(1);
  index = href.substr(href.length - 1) - 1;
}

function GetItemPos(item) {
  itemPos = item.getBoundingClientRect().left;
}

function Scroll(container) {
  container.scroll({
    left: itemPos - 25,
    behavior: 'smooth',
  });
}

function ChangeActive(func, item) {
  GetItemPos(item);
  func(item, index);
}

document.addEventListener("DOMContentLoaded", () => {
  const serviceTabs = document.querySelector('.service-content-tabs');
  const portfolioTabs = document.querySelector('.portfolio-body__action');
  const processTabs = document.querySelector('.process-hero__action');

  GetHash();

  if (href) {
    if (serviceTabs) {
      ChangeActive(ChangeServiceTab, serviceItems[index]);
      Scroll(serviceTabs);

      window.addEventListener('hashchange', () => {
        GetHash();
        ChangeActive(ChangeServiceTab, serviceItems[index]);
      });
    }
  }

  else {
    if (processTabs) {
      const active = processTabs.querySelector('.process-hero__service--active');
      GetItemPos(active);
      Scroll(processTabs);
    }
  }
});

const url = window.location.href;
const utm = [...url.matchAll(/utm_([^=]+)=([^&]*)/g)].reduce((acc, [, k, v]) => (acc[k] = v, acc), {});

if (Object.keys(utm).length !== 0) {
  const formated = JSON.stringify(utm)
  forms.forEach(form => form.setAttribute('data-utm', formated));
  localStorage.setItem('utm', formated);
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem('utm')) forms.forEach(form => form.setAttribute('data-utm', localStorage.getItem('utm')));
});