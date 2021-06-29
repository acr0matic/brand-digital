<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section id="price">
    <div id="price-header">
      <div class="container">
        <div class="price-header">
          <h1 class="price-header__title section__title page__title">Цены и акции</h1>

          <div class="price-header__promotions promotions">
            <div class="row">
              <div class="col-12 col-md-8 col-lg-4">
                <div data-micromodal-trigger="modal-promotions" style="background-image: url('img/section/promotions/1.svg'); background-color: #FF8025" class="promotions__item promotions-item">
                  <h3 class="promotions-item__title">1 из 5</h3>
                  <p class="promotions-item__description">бонусов в подарок</p>

                  <span class="promotions-item__info">акция действует до 22.03.2021</span>

                  <p class="promotions-item__text">
                    Задача организации, в особенности же новая модель организационной деятельности способствует подготовки и реализации форм развития. Таким образом постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании форм развития.
                    <br> <br>

                    Задача организации, в особенности же новая модель организационной деятельности способствует подготовки и реализации форм развития.
                  </p>
                </div>
                <!-- /.promotions__item -->
              </div>
              <!-- /.col-4 -->
              <div class="col-12 col-md-8 col-lg-4">
                <div data-micromodal-trigger="modal-promotions" style="background-image: url('img/section/promotions/2.svg'); background-color: #121212" class="promotions__item promotions-item promotions-item--new">
                  <h3 class="promotions-item__title">499₽</h3>
                  <p class="promotions-item__description">наклейки на двери</p>

                  <span class="promotions-item__info">акция действует до 22.03.2021</span>

                  <p class="promotions-item__text"></p>
                </div>
                <!-- /.promotions__item -->
              </div>
              <!-- /.col-4 -->
              <div class="col-12 col-md-8 col-lg-4">
                <div data-micromodal-trigger="modal-promotions" style="background-image: url('img/section/promotions/3.svg'); background-color: #FF8025" class="promotions__item promotions-item">
                  <h3 class="promotions-item__title">Бизнес по-русски</h3>
                  <p class="promotions-item__description">20% скидка</p>

                  <span class="promotions-item__info">акция действует до 22.03.2021</span>

                  <p class="promotions-item__text"></p>
                </div>
                <!-- /.promotions__item -->
              </div>
              <!-- /.col-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.promotions -->
        </div>
        <!-- /.price-header -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /#price-header -->

    <div id="price-content">
      <div class="container">
        <div class="price-content">
          <h2 class="price-content__title section__title">Цены</h2>
        </div>
        <!-- /.price-content -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /#price-content -->
  </section>

  <?php include_once('partials/callback.php') ?>

  <div class="modal modal--window modal-promotions micromodal-slide" id="modal-promotions" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog">
        <header class="modal__header">
          <h2 class="modal__heading" id="modal-1-title">
            Подробности акции
          </h2>

          <svg class="modal__close" data-micromodal-close viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-micromodal-close d="M2 2L34 33M34 2L2 33" stroke="white" stroke-width="4" />
          </svg>
        </header>

        <main class="modal__content">
          <div class="row">
            <div class="col-12 col-lg-6 pe-5 modal__inner">
              <div style="background-image: url(''); background-color: #FF8025" class="promotions__item promotions-item promotions-item--big">
                <h3 class="promotions-item__title">1 из 5</h3>
                <p class="promotions-item__description">бонусов в подарок</p>

                <span class="promotions-item__info">акция действует до 22.03.2021</span>
              </div>
              <!-- /.promotions__item -->
            </div>
            <!-- /.col-6 -->

            <div class="col-12 col-lg-6">
              <h3 class="modal__title">
                1 из 5 бонусов в подарок
              </h3>

              <p class="modal__text">

              </p>
            </div>
            <!-- /.col-6 -->
          </div>
          <!-- /.row -->
        </main>
      </div>
    </div>
  </div>

</main>

<?php include_once('partials/footer.php') ?>