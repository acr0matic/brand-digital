<?php include_once ('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section data-hero id="service-hero">
    <div data-hero class="hero hero--design">
      <div class="hero__row">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__content">
              <div class="hero__text">
                <h1 class="page__title section__title hero__title">Студия дизайна <span>B&D</span></h1>
                <p class="page__description hero__description">Разработка дизайна полного цикла. Не боимся <br> правок, работаем эффективно и быстро. <br> Делаем графический дизайн, web, анимации <br> и многое другое.</p>
                <p class="page__description hero__description hero__description--mobile">Разработка дизайна полного цикла. Не боимся правок, работаем эффективно и быстро. <br> Делаем графический дизайн, web, анимации и многое другое.</p>
              </div>
              <!-- /.hero__text -->

              <div class="hero__cta">
                <button data-micromodal-trigger="modal-callback" class="button button-primary me-sm-3">Начать проект</button>
                <a style="text-align: center;" href="#portfolio--block"><button class="button button-outline button-outline--orange">Портфолио</button></a>
              </div>
              <!-- /.hero__action -->

              <div class="hero__cta hero__cta--mobile">
                <button data-micromodal-trigger="modal-callback" class="button button-primary me-sm-3">Начать проект</button>
                <a href="#portfolio--block" class="button button-secondary">Портфолио</a>
              </div>
              <!-- /.hero__action -->

              <div data-safari="" poster="" class="hero__motion">
                <!-- <img class="hero__video hero__video--gif" src="video/motion/fallback/test.png" alt=""> -->
                <video class="hero__video" autoplay loop playsinline muted>
                  <source src="video/car.webm">
                </video>
              </div>
              <!-- /.hero__motion -->
            </div>
            <!-- /.hero__content -->

            <div class="hero__price">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="hero__card">
                      <picture>
                        <img class="preloader preloader--center" src="img/misc/preloader.svg" alt="">
                        <img class="cms-image lazy" data-src="img/page/service/package/pic.png" alt="">
                      </picture>
                      <!-- /.package__picture -->

                      <div>
                        <h3>Простой пакет</h3>
                        <ul class="list list--default">
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                        </ul>

                        <button class="button button-outline">7 000 ₽</button>
                      </div>
                    </div>
                    <!-- /.hero__card -->
                  </div>
                  <!-- /.swiper-slide -->

                  <div class="swiper-slide">
                    <div class="hero__card">
                      <picture>
                        <img class="preloader preloader--center" src="img/misc/preloader.svg" alt="">
                        <img class="cms-image lazy" data-src="img/page/service/package/pic.png" alt="">
                      </picture>
                      <!-- /.package__picture -->

                      <div>
                        <h3>Простой пакет</h3>
                        <ul class="list list--default">
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                        </ul>

                        <button class="button button-outline">7 000 ₽</button>
                      </div>
                    </div>
                    <!-- /.hero__card -->
                  </div>
                  <!-- /.swiper-slide -->

                  <div class="swiper-slide">
                    <div class="hero__card">
                      <picture>
                        <img class="preloader preloader--center" src="img/misc/preloader.svg" alt="">
                        <img class="cms-image lazy" data-src="img/page/service/package/pic.png" alt="">
                      </picture>
                      <!-- /.package__picture -->

                      <div>
                        <h3>Простой пакет</h3>
                        <ul class="list list--default">
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                          <li class="list__item">1 дизайн концепция</li>
                        </ul>

                        <button class="button button-outline">7 000 ₽</button>
                      </div>
                    </div>
                    <!-- /.hero__card -->
                  </div>
                  <!-- /.swiper-slide -->
                </div>
                <!-- /.swiper-wrapper -->

                <div class="swiper-controls">
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-pagination"></div>
                </div>
                <!-- /.swiper-controls -->
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.hero__price -->
          </div>
          <!-- /.hero__wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row -->
    </div>
    <!-- /.hero -->
  </section>

  <section id="service" class="section">
    <div class="container">
      <div class="service service--other">
        <h2 class="service__title section__title text-center">Какие наклейки мы делаем</h2>

        <div class="service__wrapper">
          <div data-micromodal-trigger="modal-callback" data-type="price" data-title="Предлагаем рассчитать цену на ваш транспорт" data-desc="В комментариях укажите ваш транспорт, наши менеджеры свяжуться с вами в ближайшее время" data-image="img/page/service/stikers/1.png" data-additional="design" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Стикерпаки</h3>
              <div class="service-card__price">от 14 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/stikers/1.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div data-micromodal-trigger="modal-callback" data-type="price" data-title="Предлагаем рассчитать цену на ваш транспорт" data-desc="В комментариях укажите ваш транспорт, наши менеджеры свяжуться с вами в ближайшее время" data-image="img/page/service/stikers/2.png" data-additional="design" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Наклейки <br> для электроники</h3>
              <div class="service-card__price">от 8 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/stikers/2.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div data-micromodal-trigger="modal-callback" data-type="price" data-title="Предлагаем рассчитать цену на ваш транспорт" data-desc="В комментариях укажите ваш транспорт, наши менеджеры свяжуться с вами в ближайшее время" data-image="img/page/service/stikers/3.png" data-additional="design" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Напольные наклейки</h3>
              <div class="service-card__price">от 15 000₽</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/stikers/3.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->

          <div data-micromodal-trigger="modal-callback" data-type="price" data-title="Предлагаем рассчитать цену на ваш транспорт" data-desc="В комментариях укажите ваш транспорт, наши менеджеры свяжуться с вами в ближайшее время" data-image="img/page/service/stikers/4.png" data-additional="design" class="service__card service-card">
            <div class="service-card__wrapper">
              <h3 class="service-card__title">Наклейки</h3>
              <div class="service-card__price">от 10 000 р.</div>
            </div>
            <!-- /.service-card__wrapper -->

            <img src="img/page/service/stikers/4.png" alt="" class="service-card__image">
          </div>
          <!-- /.service__card service-card -->
        </div>
        <!-- /.service__wrapper -->
      </div>
      <!-- /.service -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once ('partials/confidence.php') ?>

  <?php include_once ('partials/portfolio.php') ?>

  <!-- Включается через админку -->
  <section id="about" class="section">
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

  <section id="promotions" class="section">
    <div class="container">
      <div class="promotions">
        <h2 class="promotions__title section__title text-center">Акции и скидки</h2>

        <div class="row justify-content-lg-center">
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
            <div data-micromodal-trigger="modal-promotions" style="background-image: url('img/section/promotions/2.svg');" class="promotions__item promotions-item promotions-item--black promotions-item--new">
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
    <!-- /.container -->
  </section>

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
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-12 col-lg-7 pe-md-5 position-relative">
              <div class="modal__inner">
                <div style="background-image: url(''); background-color: #FF8025" class="promotions__item promotions-item promotions-item--big">
                  <h3 class="promotions-item__title">1 из 5</h3>
                  <p class="promotions-item__description">бонусов в подарок</p>

                  <span class="promotions-item__info">акция действует до 22.03.2021</span>
                </div>
                <!-- /.promotions__item -->
              </div>

              <button class="modal__button button button-outline button-outline--promotions">Получить акцию</button>
              <form novalidate class="modal__form form form-promotions mt-3" action="" data-target="promotion">
                <div class="input mb-2">
                  <input data-required placeholder="Имя" autocomplete="off" type="text" name="user_name" class="input__field input__field--modal input__field--required">
                  <img data-tippy-content="Имя не указано или содержит ошибки" class="input__warning" src="img/icons/warning.svg" alt="">
                </div>
                <!-- /.input -->

                <div class="input mb-2">
                  <input data-required placeholder="+7 ХХХ ХХХ-ХХ-ХХ" autocomplete="off" type="tel" name="user_email" class="input__field input__field--modal input__field--required">
                  <img data-tippy-content="Телефон не указан или содержит ошибки" class="input__warning" src="img/icons/warning.svg" alt="">
                </div>
                <!-- /.input -->

                <div class="form__wrapper">
                  <div class="input">
                    <input placeholder="E-mail" autocomplete="off" type="email" name="user_email" class="input__field input__field--modal">
                    <img data-tippy-content="Почта содержит ошибки" class="input__warning" src="img/icons/warning.svg" alt="">
                  </div>
                  <!-- /.input -->

                  <span class="form__info form__info--mobile mt-2">Обязательные поля</span>

                  <button disabled class="form__button button button-primary mt-5 mt-sm-0 ms-sm-3 ms-lg-0" type="submit">Отправить</button>
                </div>
                <!-- /.form__wrapper -->

                <div class="form__action mt-2 mt-sm-5 mt-lg-2">
                  <label class="checkbox mb-2">
                    <input type="checkbox">
                    <span class="checkbox__mark"></span>
                    <span class="checkbox__label">Согласен с <a href="privacy.php" class="checkbox__policy">Политикой обработки данных</a></span>
                  </label>
                </div>
                <!-- /.form__action -->

                <span class="form__info mt-2">Обязательные поля</span>
              </form>
            </div>
            <!-- /.col-6 -->

            <div class="col-12 col-lg-5">
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

  <?php include_once ('partials/callback.php') ?>
</main>

<?php include_once ('partials/footer.php') ?>