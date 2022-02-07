<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section data-hero id="project-hero">
    <div data-hero class="hero hero--service">
      <div class="hero__row">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__content">
              <h1 class="page__title section__title hero__title">Проекты которые мы уже <br> осуществили</h1>
              <p class="page__description hero__description">Организация брендирования авто для <br> KazanExpress.</p>
              <img class="hero__background" src="img/page/all-projects/hero/background.svg" alt="">
            </div>
            <!-- /.hero__content -->

            <div class="hero__cta">
              <button data-micromodal-trigger="modal-callback" class="button button-primary me-sm-3">Начать проект</button>
              <a style="text-align: center;" href="#portfolio--block"><button class="button button-outline button-outline--orange">Все работы</button></a>

              <div class="hero__mobile hero-mobile">
                <img class="hero-mobile__icon" src="img/page/main/hero/icons/mobile/1.svg" alt="">
              </div>
              <!-- /.hero__mobile -->
            </div>
            <!-- /.hero__action -->
          </div>
          <!-- /.hero__wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.hero__row -->

      <div class="hero__row hero__row--white hero__row--mobile">
        <div class="container">
          <div class="hero__cta">
            <a href="#promotions"><button class="button button--cta button-primary mb-3 mb-md-0 me-md-3">Наши акции</button></a>
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

  <?php include_once('partials/confidence.php') ?>

  <?php include_once('partials/callback.php') ?>
</main>

<?php include_once('partials/footer.php') ?>