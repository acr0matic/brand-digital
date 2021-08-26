<?php include_once('partials/header.php') ?>

<!-- Основной контент -->
<main>
  <section id="not-found">
    <div class="container">
      <div class="not-found">
        <div class="row flex-column flex-lg-row align-items-center">
          <div class="col-12 col-lg-6">
            <h1 class="page__title not-found__title">Ошибка 404</h1>
            <p class="page__description not-found__description">
              Страница не найдена или удалена. <br>
              Возможно введён не верный адрес в адресной строке.
            </p>

            <button class="not-found__button button button-primary">Вернуться назад</button>
          </div>
          <!-- /.col-6 -->

          <div class="col-12 col-lg-6">
            <img class="not-found__image" src="img/page/404/image.svg" alt="">
          </div>
          <!-- /.col-6 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.not-found -->
    </div>
    <!-- /.container -->
  </section>
</main>

<?php include_once('partials/footer.php') ?>