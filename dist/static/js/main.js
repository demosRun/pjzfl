

$(function () {
  new Swiper(document.getElementsByClassName('swiper-container')[0], {
    pagination: document.getElementsByClassName('pagination')[0],
    loop: true,
    autoplay: 3000,
    paginationClickable: true
  })
  new tabIt(document.querySelector('.tab-card .tab-bar'), document.querySelectorAll('.tab-conn li'))
})