

$(function () {
  new Swiper(document.getElementsByClassName('swiper-container')[0], {
    pagination: document.getElementsByClassName('pagination')[0],
    loop: true,
    autoplay: 3000,
    paginationClickable: true
  })

  // document.querySelector('.ro-box').style.width = document.querySelectorAll('.tab-card .tab-bar .tab-bar-item').length * 230 + 'px'

  new tabIt(document.querySelectorAll('.tab-card .tab-bar .tab-bar-item'), document.querySelectorAll('.tab-conn li'), 'mouseover')


  
  document.querySelector('.roll-box').style.width = document.querySelectorAll('.roll-box .image-box-item').length * 465 + 'px'
})