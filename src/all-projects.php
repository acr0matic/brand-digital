<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section data-hero id="project-hero">
    <div data-hero class="hero">
      <div class="hero__row">
        <div class="container">
          <div class="hero__wrapper">
            <div class="hero__content">
              <h1 class="page__title section__title hero__title">Крупные проекты</h1>
              <p class="page__description hero__description">Мы гордимся каждым нашим проектом, <br> но некоторые из них занимают особое <br> место в жизни нашей компании. </p>
              <img class="hero__background" src="img/page/all-projects/hero/background.png" alt="">
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
    </div>
    <!-- /.hero -->
  </section>

  <section id="projects">
    <div class="projects__wrapper">
      <div class="project-card">
        <div class="project-card__content">
          <div class="container">
            <div class="project-card__wrapper">
              <h2 class="page__title project-card__title">Брендирование авто <br> для KazanExpress</h2>
              <a href="" class="project-card__button button button-outline">Смотреть</a>
            </div>
            <!-- /.project-card__wrapper -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.project-card__content -->

        <div class="project-card__background">
          <div style="background-color: #005C47;" class="project-card__fill"></div>
          <img src="img/page/all-projects/project-card/background.png" alt="" class="project-card__pattern">
          <img src="img/page/all-projects/project-card/logo.png" alt="" class="project-card__logo">
          <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image">
        </div>
        <!-- /.project-card__background -->

        <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image project-card__image--mobile">
      </div>
      <!-- /.project-card -->

      <div id="test" class="project-card">
        <div class="project-card__content">
          <div class="container">
            <div class="project-card__wrapper">
              <h2 class="page__title project-card__title">Брендирование авто <br> для KazanExpress</h2>
              <button class="project-card__button button button-outline">Смотреть</button>
            </div>
            <!-- /.project-card__wrapper -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.project-card__content -->

        <div class="project-card__background">
          <div style="background-color: #005C47;" class="project-card__fill"></div>
          <img src="img/page/all-projects/project-card/background.png" alt="" class="project-card__pattern">
          <img src="img/page/all-projects/project-card/logo.png" alt="" class="project-card__logo">
          <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image">
        </div>
        <!-- /.project-card__background -->

        <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image project-card__image--mobile">
      </div>
      <!-- /.project-card -->

      <div class="project-card">
        <div class="project-card__content">
          <div class="container">
            <div class="project-card__wrapper">
              <h2 class="page__title project-card__title">Брендирование авто <br> для KazanExpress</h2>
              <button class="project-card__button button button-outline">Смотреть</button>
            </div>
            <!-- /.project-card__wrapper -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.project-card__content -->

        <div class="project-card__background">
          <div style="background-color: #005C47;" class="project-card__fill"></div>
          <img src="img/page/all-projects/project-card/background.png" alt="" class="project-card__pattern">
          <img src="img/page/all-projects/project-card/logo.png" alt="" class="project-card__logo">
          <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image">
        </div>
        <!-- /.project-card__background -->

        <img src="img/page/all-projects/project-card/image.jpg" alt="" class="project-card__image project-card__image--mobile">
      </div>
      <!-- /.project-card -->
    </div>
    <!-- /.projects__wrapper -->

    <div class="project__footer">
      <div class="projects__marquee text-scrolling">
        <div class="text-scrolling__content text-scrolling__content--image">
          <img src="img/page/all-projects/projects/scrolling.png" alt="">
          <img src="img/page/all-projects/projects/scrolling.png" alt="">
        </div>
        <!-- /.text-scrolling__content -->
      </div>

      <div class="hero__cta hero__cta--mobile">
        <button data-micromodal-trigger="modal-callback" class="button button-primary me-sm-3 mb-3">Начать проект</button>
        <a style="text-align: center;" href="#portfolio--block"><button class="button button-outline button-outline--orange">Все работы</button></a>
      </div>
      <!-- /.hero__action -->
    </div>
    <!-- /.project__footer -->

  </section>

  <?php include_once('partials/confidence.php') ?>

  <?php include_once('partials/callback.php') ?>
</main>

<?php include_once('partials/footer.php') ?>