<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section style="background-image: url('img/page/main/hero/bg/1.png');" id="service-hero">
    <div class="hero hero--service">
      <div class="hero__row">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__content">
              <h1 class="page__title section__title hero__title">Брендируем авто <br> <span>под ключ</span> за 2 дня</h1>
              <p class="page__description hero__description">Профессиональное брендирование любого <br> транспорта. Собственное производство <br> материалов для оклейки. Используем ваш <br> дизайн или разработаем собственный.</p>
              <p class="page__description hero__description hero__description--mobile">
                Профессиональное брендирование <br> любого транспорта. Собственное <br> производство материалов для <br> оклейки.
              </p>
            </div>
            <!-- /.hero__content -->

            <div class="hero__cta">
              <button class="button button-primary me-md-3">Начать проект</button>
              <button class="button button-outline button-outline--orange">Портфолио</button>

              <div class="hero__mobile hero-mobile">
                <img class="hero-mobile__icon" src="img/page/main/hero/icons/mobile/1.svg" alt="">
              </div>
              <!-- /.hero__mobile -->
            </div>
            <!-- /.hero__action -->

            <a href="#promotions" class="hero__anchor">
              Наши акции

              <svg class="svg ms-3" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" width="2" height="21" rx="1" fill="#FF8025" />
                <rect width="2" height="9" rx="1" transform="matrix(0.707107 0.707107 -0.703365 0.710829 12.3301 14)" fill="#FF8025" />
                <rect width="2" height="9" rx="1" transform="matrix(-0.707107 0.707107 0.703365 0.710829 2 14)" fill="#FF8025" />
              </svg>
            </a>

            <div class="hero__motion">
              <video class="hero__video" autoplay loop>
                <source src="video/motion/car.webm">
              </video>
            </div>
            <!-- /.hero__motion -->

            <div class="hero__social">
              <a href="" class="hero__link"><img src="img/icons/social/instagram.svg" alt="" class="side-menu__icon"></a>
              <a href="" class="hero__link"><img src="img/icons/social/facebook.svg" alt="" class="side-menu__icon"></a>
              <a href="" class="hero__link"><img src="img/icons/social/pinterest.svg" alt="" class="side-menu__icon"></a>
              <a href="" class="hero__link"><img src="img/icons/social/mail.svg" alt="" class="side-menu__icon"></a>
            </div>
            <!-- /.side-menu__social -->
          </div>
          <!-- /.hero__wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row -->

      <div class="hero__row hero__row--white hero__row--mobile">
        <div class="container">
          <div class="hero__cta">
            <button class="button button--cta button-primary mb-3 mb-md-0 me-md-3">Наши акции</button>
            <button class="button button--cta button-outline">Портфолио</button>
          </div>
          <!-- /.hero__action -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row hero__row--white -->
    </div>
    <!-- /.hero -->
  </section>

  <?php include_once('partials/confidence.php') ?>

  <?php include_once('partials/portfolio.php') ?>

  <section id="promotions" class="section">
    <div class="container">
      <div class="promotions">
        <h2 class="promotions__title section__title text-center">Акции и скидки</h2>

        <div class="row">
          <div class="col-12 col-lg-4">
            <div style="background-image: url(''); background-color: #FF8025" class="promotions__item promotions-item">
              <h3 class="promotions-item__title">1 из 5</h3>
              <p class="promotions-item__description">бонусов в подарок</p>

              <span class="promotions-item__info">акция действует до 22.03.2021</span>
            </div>
            <!-- /.promotions__item -->
          </div>
          <!-- /.col-4 -->
          <div class="col-12 col-lg-4">
            <div style="background-image: url(''); background-color: #121212" class="promotions__item promotions-item promotions-item--new">
              <h3 class="promotions-item__title">499₽</h3>
              <p class="promotions-item__description">наклейки на двери</p>

              <span class="promotions-item__info">акция действует до 22.03.2021</span>
            </div>
            <!-- /.promotions__item -->
          </div>
          <!-- /.col-4 -->
          <div class="col-12 col-lg-4">
            <div style="background-image: url(''); background-color: #FF8025" class="promotions__item promotions-item">
              <h3 class="promotions-item__title">Бизнес по-русски</h3>
              <p class="promotions-item__description">20% скидка</p>

              <span class="promotions-item__info">акция действует до 22.03.2021</span>
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

  <?php include_once('partials/callback.php') ?>
</main>

<?php include_once('partials/footer.php') ?>