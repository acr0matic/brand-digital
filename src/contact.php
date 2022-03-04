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
            <a class="social__link" href="">
              <svg class="social__icon" width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3909 0H8.60909C3.87602 0 0 3.87602 0 8.60909V26.3909C0 31.124 3.87602 35 8.60909 35H26.3909C31.124 35 35 31.124 35 26.3909V8.60909C35 3.87602 31.124 0 26.3909 0V0ZM26.9777 6.04566C28.1127 6.04566 29.0393 6.96448 29.0393 8.10721C29.0393 9.24222 28.1204 10.1688 26.9777 10.1688C25.8427 10.1688 24.9162 9.24994 24.9162 8.10721C24.9162 6.9722 25.835 6.04566 26.9777 6.04566ZM17.4961 8.7944C19.8974 8.7944 22.0748 9.76726 23.6422 11.3424C25.2173 12.9175 26.1902 15.0871 26.1902 17.4884C26.1902 19.8897 25.2173 22.0671 23.6422 23.6345C22.0671 25.2096 19.8974 26.1824 17.4961 26.1824C15.0949 26.1824 12.9175 25.2096 11.3501 23.6345C9.77498 22.0593 8.80212 19.8897 8.80212 17.4884C8.80212 15.0871 9.77498 12.9098 11.3501 11.3424C12.9252 9.76726 15.0949 8.7944 17.4961 8.7944ZM17.4961 11.6898C20.7004 11.6898 23.2947 14.2841 23.2947 17.4884C23.2947 20.6927 20.7004 23.287 17.4961 23.287C14.2919 23.287 11.6976 20.6927 11.6976 17.4884C11.6976 14.2841 14.2919 11.6898 17.4961 11.6898ZM26.3832 3.60578H8.60137C5.86036 3.60578 3.60578 5.86036 3.60578 8.60137V26.3832C3.60578 29.1242 5.86036 31.3788 8.60137 31.3788H26.3832C29.1242 31.3788 31.3788 29.1242 31.3788 26.3832V8.60137C31.3788 5.86036 29.1242 3.60578 26.3832 3.60578Z" fill="#FEFEFE" />
              </svg>
            </a>

            <a class="social__link" href="">
              <svg class="social__icon" width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.67496 0H26.3325C31.0978 0 35 3.90223 35 8.66745V26.325C35 31.0903 31.0978 34.9925 26.3325 34.9925H20.2015V22.3253H24.5916L25.2519 17.2223H20.2015V13.9655C20.2015 12.4871 20.6068 11.4816 22.7305 11.4816H25.432V6.91895C24.9668 6.85892 23.3608 6.71634 21.4923 6.71634C17.5976 6.71634 14.926 9.0952 14.926 13.4627V17.2298H10.521V22.3328H14.926V35H8.66745C3.90223 35 0 31.0978 0 26.3325V8.67496C0 3.90973 3.90223 0.00750429 8.66745 0.00750429L8.67496 0Z" fill="#FEFEFE" />
              </svg>
            </a>

            <a class="social__link" href="">
              <svg class="social__icon" width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.03581 0H32.9648C36.2869 0 39.0006 2.67405 39.0006 5.94758V25.0524C39.0006 28.326 36.2869 31 32.9648 31H6.03581C2.71371 31 0 28.326 0 25.0524V5.94758C0 2.67405 2.71371 0 6.03581 0ZM36.3269 11.8084L20.1247 20.288C19.7164 20.501 19.2441 20.4852 18.8599 20.2802L2.66568 11.8084V25.0524C2.66568 26.8746 4.17864 28.3654 6.0278 28.3654H32.9568C34.806 28.3654 36.3189 26.8746 36.3189 25.0524V11.8084H36.3269ZM2.67369 8.82672L19.5003 17.6298L36.3269 8.82672V5.93969C36.3269 4.11756 34.814 2.62672 32.9648 2.62672H6.03581C4.18664 2.62672 2.67369 4.11756 2.67369 5.93969V8.82672Z" fill="#FEFEFE" />
              </svg>
            </a>

            <a class="social__link" href="">
              <svg class="social__icon" width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.6662 0H26.3338C31.1033 0 35 3.90207 35 8.66274V26.3233C35 31.0909 31.0964 34.986 26.3338 34.986H11.9902C12.7654 33.7994 14.0642 31.6564 14.5182 29.9741C14.7556 29.1155 15.7123 25.6183 15.7123 25.6183C16.3478 26.7631 18.1704 27.7194 20.1117 27.7194C25.8939 27.7194 30.0768 22.6376 30.0768 16.3273C30.0559 10.2822 24.8813 5.75888 18.2193 5.75888C9.93715 5.75888 5.53771 11.064 5.53771 16.8438C5.53771 19.5243 7.03911 22.868 9.43436 23.929C10.1187 24.2361 10.0279 23.8592 10.6145 21.6115C10.6634 21.423 10.6355 21.2625 10.4888 21.088C7.06006 17.1231 9.81843 8.9629 17.7304 8.9629C29.176 8.9629 27.0391 24.7946 19.7207 24.7946C17.8352 24.7946 16.4316 23.3147 16.8715 21.4858C17.4092 19.3079 18.4637 16.9625 18.4637 15.3919C18.4637 11.434 12.5628 12.0203 12.5628 17.2696C12.5628 18.8891 13.1355 19.985 13.1355 19.985C13.1355 19.985 11.236 27.6566 10.8869 29.0876C10.433 30.9374 10.7193 33.6598 10.9078 35H8.6662C3.89665 35 0 31.0979 0 26.3373V8.67671C0 3.90905 3.90363 0.0139609 8.6662 0.0139609V0Z" fill="#FEFEFE" />
              </svg>
            </a>
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

                <div class="contact__item">
                  <div class="contact__name">
                    По всем вопросам:
                  </div>
                  <!-- /.contact__name -->

                  <a href="mailto:" class="contact__email link link--orange"><strong>info@branddigital.ru</strong></a>
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

          <ul class="map__list list list--clear custom-scrollbar">
            <li data-coords="56.297633, 43.954764" data-address="" class="list__item list__item--active">Нижний Новгород, Воротынская 2А</li>
            <li data-coords="56.259318, 43.890023" data-address="" class="list__item">Нижний Новгород, Борская 17к1</li>
            <li data-coords="55.809024, 37.594135" data-address="" class="list__item">Москва, Добролюбова 1</li>
            <li data-coords="55.813824, 37.785018" data-address="" class="list__item">Москва, Иркутская 1</li>
          </ul>

          <h2 class="map__title section__title">Центральный офис</h2>
          <ul class="map__list list list--clear">
            <li data-coords="56.297633, 43.954764" data-address="" class="list__item">Нижний Новгород, Воротынская 2А</li>
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