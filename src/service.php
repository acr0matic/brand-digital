<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
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