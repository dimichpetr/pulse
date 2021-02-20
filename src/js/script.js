$(document).ready(function(){
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    touch: true,
    controls: false,
    nav: false,
    speed: 1000
  
    // responsive: {
    //   992: {
    //     fixedWidth: 950
    //   },
    //   768: {
    //     fixedWidth: 600
    //   }
    // }
  });
  
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });



  function toggleSilde(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSilde('.catalog-item__link');
  toggleSilde('.catalog-item__back');



  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });

  $('[data-modal=order]').on('click', function() {
    $('.overlay, #order').fadeIn();
  });

  // $('[data-modal=thanks]').on('click', function() {
  //   $('.overlay, #thanks').fadeIn('fast');
  //   $('#order').fadeOut('fast');
  // });

  $('[data-modal=close]').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('[data-modal=order]').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
  });

  

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: 'Пожалуйста, введите своё имя',
        phone: 'Пожалуйста, введите номер телефона',
        email: {
          required: 'Пожалуйста, введите адрес эл. почты',
          email: 'Неверный адрес эл. почты'
        }
      }
    });
  }

  validateForm('#consultation-form');
  validateForm('#consultation form');
  validateForm('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");
});