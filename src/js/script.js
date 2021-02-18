const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  touch: true,
  controls: false,
  nav: false,
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