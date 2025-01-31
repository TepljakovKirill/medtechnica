<script setup>
import { ref } from "vue";
import { Navigation } from "swiper/modules";

const modules = [Navigation];

defineProps({
  newItems: Array,
});

const prevButton = ref(null);
const nextButton = ref(null);
</script>

<template>
  <div class="newProducts">
    <h1 class="newProduct-title">Новинки</h1>
    <div class="swiper-wrapper">
      <Swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="10"
        :loop="true"
        :navigation="{ prevEl: prevButton, nextEl: nextButton }"
        class="swiper-container"
      >
        <SwiperSlide
          v-for="item in newItems"
          :key="item.id"
          class="swiper-slide"
        >
          <NewProduct :product="item" />
        </SwiperSlide>
      </Swiper>
      <button ref="prevButton" class="swiper-button-prev"></button>
      <button ref="nextButton" class="swiper-button-next"></button>
    </div>
  </div>
</template>
  
<style scoped>
.newProducts {
  margin-top: 63px;
}

.newProduct-title {
  margin-bottom: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #3257a4;
}

.swiper-wrapper {
  position: relative;
}

.swiper-container {
  width: 100%;
}

.swiper-slide {
  width: 25%;
}

:deep(.swiper-button-next::after) {
  display: none;
}

:deep(.swiper-button-prev::after) {
  display: none;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  position: absolute;
  top: 55%;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
}

:deep(.swiper-button-prev) {
  left: -50px;
  background-image: url(../assets/images/prew-button.png);
}

:deep(.swiper-button-next) {
  right: -50px;
  background-image: url(../assets/images/next-button.png);
}
</style>




