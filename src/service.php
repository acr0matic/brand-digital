<?php include_once ('partials/header.php') ?>

<!-- Основной контент -->
<main id="service-page">
  <section data-hero style="background-image: url('img/page/main/hero/bg/1.png');" id="service-hero">
    <div class="hero hero--service">
      <div class="hero__row">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__content">
              <h1 class="page__title section__title hero__title">
                Оклеиваем авто
                <br>
                любой сложности
                <br>
                <span>от 1 000₽</span>
              </h1>

              <p class="page__description hero__description">
                Полный цикл: от дизайна до оклеивания ТС.
                <br>
                Создаем рекламу, которая продает.
              </p>

              <p class="page__description hero__description hero__description--mobile">
                Профессиональное брендирование <br> любого транспорта. Собственное <br> производство материалов для <br> оклейки.
              </p>
            </div>
            <!-- /.hero__content -->

            <div class="hero__cta">
              <button data-micromodal-trigger="modal-callback" class="button button-primary me-sm-3">Оставить заявку</button>
              <a style="text-align: center;" href="#portfolio--block"><button class="button button-outline button-outline--orange">Портфолио</button></a>

              <div class="hero__mobile hero-mobile">
                <img class="hero-mobile__icon" src="img/page/main/hero/icons/mobile/1.svg" alt="">
              </div>
              <!-- /.hero__mobile -->
            </div>
            <!-- /.hero__action -->

            <div class="hero__motion hero__motion--margin" data-safari="video/fallback/car.png">
              <video poster="video/posters/car.png" class="hero__video" autoplay loop playsinline muted>
                <source src="video/car.webm">
              </video>
            </div>
            <!-- /.hero__motion -->
          </div>
          <!-- /.hero__wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row -->

      <div class="hero__row hero__row--white hero__row--mobile">
        <div class="container">
          <div class="hero__cta">
            <a style="text-align: center;" href="#portfolio--block"><button class="button button--cta button-outline">Портфолио</button></a>
          </div>
          <!-- /.hero__action -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row hero__row--white -->
    </div>
    <!-- /.hero -->
  </section>

  <section id="service-advantage" class="section">
    <div class="container">
      <div class="service-advantage">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="service-advantage__item">
              <h3>
                +100
              </h3>

              <h4>
                Постоянных клиентов
              </h4>

              <p>
                точное соблюдение сроков и ТЗ
              </p>
            </div>
            <!-- /.service-advantage__item -->
          </div>
          <!-- /.col-4 -->

          <div class="col-12 col-md-4">
            <div class="service-advantage__item">
              <h3>
                280 м<sup>2</sup>
              </h3>

              <h4>
                Мощность производства
              </h4>

              <p>
                в среднем 14 газелей в сутки
              </p>
            </div>
            <!-- /.service-advantage__item -->
          </div>
          <!-- /.col-4 -->

          <div class="col-12 col-md-4">
            <div class="service-advantage__item">
              <h3>
                +1050
              </h3>

              <h4>
                Реализованных проектов
              </h4>

              <p>
                опыт работы любой сложности
              </p>
            </div>
            <!-- /.service-advantage__item -->
          </div>
          <!-- /.col-4 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.service-advantage -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once ('partials/portfolio.php') ?>

  <section id="request" class="section">
    <div class="container">
      <div class="request">
        <div class="row flex-column-reverse flex-lg-row justify-content-lg-between align-items-center">
          <div class="col-12 col-lg-6">
            <div class="request__content">
              <h2 class="section__title">
                Оставьте заявку
                <br>
                на <span>бесплатную</span> консультацию
              </h2>

              <p class="section__text">Наши специалисты ответят вам в течение 5 минут!</p>

              <button data-micromodal-trigger="modal-callback" class="button button-primary">Оставить заявку</button>
            </div>
            <!-- /.request__content -->
          </div>
          <!-- /.col-6 -->

          <div class="col-12 col-lg-5 d-block d-sm-none d-lg-block">
            <picture class="request__picture">
              <img class="mx-auto" src="img/page/service/illustration.svg" alt="">
            </picture>
            <!-- /.request__picture -->
          </div>
          <!-- /.col-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.request -->

    </div>
    <!-- /.container -->
  </section>

  <section id="service" class="section">
    <div class="container">
      <div class="service">
        <h2 class="service__title section__title text-center">Какие авто мы брендируем</h2>

        <div class="service__wrapper">
          <div onclick="window.location.href='service-page.php#category-4'" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Грузовой <br> автомобиль</h3>
              <div class="service-card__price">
                <span>от 14 000₽</span>
                под ключ
              </div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/1.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div onclick="window.location.href='service-page.php#category-1'" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Легковой</h3>
              <div class="service-card__price">от 8 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/2.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div onclick="window.location.href='service-page.php#category-3'" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Фургон</h3>
              <div class="service-card__price">от 15 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/3.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div onclick="window.location.href='service-page.php#category-2'" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Малый <br> Грузовой</h3>
              <div class="service-card__price">от 13 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/4.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div onclick="window.location.href='service-page.php#category-5'" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Фура</h3>
              <div class="service-card__price">от 25 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/5.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div data-micromodal-trigger="modal-callback" data-type="price" data-title="Предлагаем рассчитать цену на ваш транспорт" data-desc="В комментариях укажите ваш транспорт, наши менеджеры свяжуться с вами в ближайшее время" data-image="img/misc/modal/modal-price.jpg" data-additional="car" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Ваш транспорт</h3>
              <div class="service-card__price">Спец. цена</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/car/6.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->
        </div>
        <!-- /.service__wrapper -->
      </div>
      <!-- /.service -->
    </div>
    <!-- /.container -->
  </section>

  <section id="promotion-action" class="section">
    <div class="container">
      <div class="promotion-action">
        <h2 class="section__title">
          Закажите оклейку от 3-х авто
          <br>
          и получите <span>СКИДКУ 15%</span>
        </h2>

        <p class="section__text">Акция действует на единовременный заказ услуги</p>

        <div class="row">
          <div class="col-12 col-lg-9 col-xl-7">
            <form novalidate="" action="php/mail.php" class="modal__form form form-modal" data-target="callback">
              <div class="row">
                <div class="col-12 col-md-4 mb-3 mb-md-0">
                  <label class="input">
                    <span class="input__label">Телефон*</span>
                    <input data-required placeholder="Ваш номер телефона" autocomplete="off" type="tel" name="user_phone" class="input__field input__field--big input__field--required">
                    <img data-tippy-content="Телефон не указан или содержит ошибки" class="input__warning" src="img/icons/warning.svg" alt="">
                  </label>
                  <!-- /.input -->
                </div>
                <!-- /.col-2 -->

                <div class="col-12 col-md-4 mb-4 mb-md-0">
                  <div class="input">
                    <span class="input__label">E-mail</span>
                    <input data-required placeholder="Ваша почта" autocomplete="off" type="email" name="user_email" class="input__field input__field--big input__field--required">
                    <img data-tippy-content="Почта не указана или содержит ошибки" class="input__warning" src="img/icons/warning.svg" alt="">
                  </div>
                  <!-- /.input -->
                </div>
                <!-- /.col-2 -->

                <div class="col-12 col-md-4">
                  <button data-sending="Отправка..." class="modal__button form__button button button-primary" type="submit">Оставить заявку</button>
                </div>
                <!-- /.col-2 -->
              </div>
              <!-- /.row -->

              <p class="form__privacy mt-3">*Нажимая на кнопку вы соглашаетесь с <a class="link link--underline link--orange" href="">политикой обработки персональных даннных</a></p>
            </form>
          </div>
          <!-- /.col-6 -->
        </div>
        <!-- /.row -->

        <img class="promotion-action__background" src="img/page/service/promotion/illustration.svg" alt="">
      </div>
      <!-- /.promotion-action -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once ('partials/confidence.php') ?>

  <!-- Включается через админку -->
  <section id="about" class="section pt-5">
    <div class="container">
      <div class="about">
        <div class="row">
          <div class="col-12 mb-4 mb-lg-0 col-lg-5">
            <div class="about__content">
              <h2 class="about__title section__title">Студия <br> брендирования <span>B&D</span></h2>
              <p class="about__text section__text">Наша команда занимается созданием визуальных <br> решений для бизнеса. Специалисты B&D заточены <br> на то, чтобы формировать яркий и заметный бренд.</p>
            </div>
            <!-- /.about__content -->
          </div>
          <!-- /.col-5 -->

          <div class="col-12 col-lg-7">
            <div class="about__video position-relative">
              <img class="video__preloader preloader preloader--center" src="img/misc/preloader.svg" alt="">
              <iframe class="position-relative lazy" width="100%" height="100%" data-src="https://www.youtube.com/embed/rDaC1yokRQs" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <!-- /.about__video -->
          </div>
          <!-- /.col-7 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.about -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once ('partials/seo-block.php') ?>

  <?php include_once ('partials/callback.php') ?>
</main>

<?php include_once ('partials/footer.php') ?>