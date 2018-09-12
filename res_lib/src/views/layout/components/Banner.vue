<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img src="../../../assets/banner.jpg" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {

    }
  }
</script>
<style scoped>
  .swiper-slide{
    height: auto;
  }
  img{
    width: 100%;
  }
</style>
