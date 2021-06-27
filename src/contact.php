<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <script src='https://api-maps.yandex.ru/2.1/?lang=ru_RU'></script>

  <section id="contact">
    <div class="container">
      <div class="contact">
        <div class="contact__header">
          <h1 class="contact__title section__title page__title">Контакты</h1>

          <div class="contact__social social">
            <a href="" class="social__link"><img src="img/icons/social/instagram.svg" alt="" class="side-menu__icon"></a>
            <a href="" class="social__link"><img src="img/icons/social/facebook.svg" alt="" class="side-menu__icon"></a>
            <a href="" class="social__link"><img src="img/icons/social/pinterest.svg" alt="" class="side-menu__icon"></a>
            <a href="" class="social__link"><img src="img/icons/social/mail.svg" alt="" class="side-menu__icon"></a>
          </div>
          <!-- /.contact__social -->
        </div>
        <!-- /.contact__header -->

        <div class="contact__content">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="contact__wrapper">
                <div class="contact__item">
                  <div class="contact__role">
                    Работа с клиентами
                  </div>
                  <!-- /.contact__role -->

                  <div class="contact__name">
                    Михаил
                  </div>
                  <!-- /.contact__name -->

                  <a href="" class="contact__phone link link--orange">+7 930 819-18-83</a>
                </div>
                <!-- /.contact__item -->

                <div class="contact__item">
                  <div class="contact__name">
                    По всем вопросам:
                  </div>
                  <!-- /.contact__name -->

                  <a href="mailto:" class="contact__email link link--orange"><strong>info@branddigital.ru</strong></a>
                </div>
                <!-- /.contact__item -->

                <div class="contact__item">
                  <div class="contact__role">
                    Директор
                  </div>
                  <!-- /.contact__role -->

                  <div class="contact__name">
                    Александр
                  </div>
                  <!-- /.contact__name -->

                  <a href="" class="contact__phone link link--orange">+7 930 819-18-83</a>
                </div>
                <!-- /.contact__item -->

                <div class="contact__item">
                  <div class="contact__name">
                    Телефон горячей линии
                  </div>
                  <!-- /.contact__name -->

                  <a href="" class="contact__phone link link--orange"><strong>+7 930 819-18-83</strong></a>
                </div>
                <!-- /.contact__item -->

                <div class="contact__item">
                  <div class="contact__role">
                    Маркетинг
                  </div>
                  <!-- /.contact__role -->

                  <div class="contact__name">
                    Дмитрий
                  </div>
                  <!-- /.contact__name -->

                  <a href="" class="contact__phone link link--orange">+7 930 819-18-83</a>
                </div>
                <!-- /.contact__item -->
              </div>
              <!-- /.contact__wrapper -->
            </div>
            <!-- /.col-6 -->
          </div>
          <!-- /.row -->

          <img src="img/page/contact/background.svg" alt="" class="contact__background">
        </div>
        <!-- /.contact__content -->
      </div>
      <!-- /.contact -->
    </div>
    <!-- /.container -->
  </section>

  <section id="map" class="section">
    <div class="container">
      <div class="map">
        <div class="map__content">
          <h2 class="map__title section__title">Места оклейки</h2>
          <p class="map__text section__text">выездные работы по всей России</p>

          <ul class="map__list list list--clear">
            <li class="list__item list__item--active">Нижний Новгород, Воротынская 2А</li>
            <li class="list__item">Нижний Новгород, Борская 17к1</li>
            <li class="list__item">Москва, Добролюбова 1</li>
            <li class="list__item">Москва, Иркутская 1</li>
          </ul>

          <h2 class="map__title section__title">Центральный офис</h2>
          <ul class="map__list list list--clear">
            <li class="list__item">Нижний Новгород, Воротынская 2А</li>
          </ul>
        </div>
        <!-- /.map__content -->

        <div id="yandexMap" class="map__wrapper">

        </div>
        <!-- /.map__wrapper -->
      </div>
      <!-- /.map -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once('partials/callback.php') ?>
</main>


<?php include_once('partials/footer.php') ?>