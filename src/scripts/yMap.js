const mapContainer = document.getElementById('yandexMap');
let map = null;
let mapData = null;

if (mapContainer) {
  ymaps.ready(function () {
    let coords = [],
      address = [];
    const points = document.querySelectorAll('.map__content .list__item');

    points.forEach(point => {
      coords.push(point.getAttribute('data-coords').replace(' ', '').split(','));
      address.push(point.getAttribute('data-address'));
    });

    map = new ymaps.Map(mapContainer, {
      center: coords[0],
      zoom: 15
    });

    map.behaviors.disable('scrollZoom');

    points.forEach((point, index) => {
      point.addEventListener('click', () => {
        const active = document.querySelector('.list__item--active');

        if (active) active.classList.remove('list__item--active');
        point.classList.add('list__item--active');

        map.panTo([coords[index]])
      });

      var place = new ymaps.Placemark(
        coords[index], {
        balloonContentBody: address[index],
      },
        {
          iconColor: '#ff8025',
        },
      );

      map.geoObjects.add(place);
    });
  });
}