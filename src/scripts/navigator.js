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
    left: itemPos - 22,
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
});

