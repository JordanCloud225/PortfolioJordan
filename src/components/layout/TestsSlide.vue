<template>
  <div class="swiper-container">

  <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/abstract-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/abstract-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/abstract-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/abstract-4.jpg"
    /></swiper-slide>
  </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cube';
  import 'swiper/css/pagination';

//   import './style.css';

  // import required modules
  import { EffectCube, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCube, Pagination],
      };
    },
  };
</script>
<style>
.swiper-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background: transparent; /* Optionnel: pour voir le conteneur */
}

.mySwiper {
  width: clamp(200px, 450px, 650px);  /* Largeur fixe */
  height: clamp(200px, 450px, 650px); /* Hauteur fixe */
  box-shadow: 0 10px 30px rgba(247, 243, 247, 0.918);
}

/* Pour les slides */
.mySwiper .swiper-slide {
  width: 100%;
  height: 100%;
  
}
/* Effet au survol */
/* .mySwiper .swiper-slide:hover {
  transform: scale(1.05);
} */


.mySwiper .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9) contrast(1.1); /* Légèrement plus sombre et contrasté */
  transition: filter 0.3s ease;

}

.mySwiper .swiper-slide:hover img {
  filter: brightness(1.05);
}
</style>