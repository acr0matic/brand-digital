const mapContainer = document.getElementById('yandexMap');
let map = null;
let mapData = null;

if (mapContainer) {

  ymaps.ready(function () {
    fetch('/wp-content/themes/brand-digital/assets/data/map.json')
      .then((response) => response.json())
      .then((data) => {
        mapData = data;

        map = new ymaps.Map(mapContainer, {
          center: mapData[1].coordinates,
          zoom: 15
        });

        map.behaviors.disable('scrollZoom');

        for (const key in mapData) {
          const element = data[key];

          let address = element.address;

          var place = new ymaps.Placemark(
            element.coordinates, {
            balloonContentBody: address,
          },
            {
              iconColor: '#ff8025',
            },
          );

          map.geoObjects.add(place);
        }
      });
  });

  const points = document.querySelectorAll('#map .map__list .list__item');
  points.forEach((point, index) => {
    point.addEventListener('click', () => {
      const active = document.querySelector('.list__item--active');

      if (active) active.classList.remove('list__item--active');
      point.classList.add('list__item--active');

      map.panTo([mapData[index + 1].coordinates])
    });
  });
}