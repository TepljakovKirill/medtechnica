<script setup>
import { Navigation } from "swiper/modules";

const modules = [Navigation];
</script>

<template>
  <div class="slider">
    <Swiper :modules="modules" :slides-per-view="1" navigation>
      <SwiperSlide>
        <div class="slide-content flex">
          <div class="slide-content__text">
            <img
              class="bunner-logo"
              src="@/assets/images/bunner-logo-1.svg"
              alt="лого слайда"
            />
            <h1 class="slide-content__title">
              Ручные и автоматические дефибрилляторы «Primedic»
            </h1>
            <div class="slide-content__descr">
              что то нужно написать, может быть качество и выгодные цены..
            </div>
            <nuxt-link to="/" class="slide-content__button flex"
              >перейти в каталог</nuxt-link
            >
          </div>
          <img
            src="@/assets/images/heart-save.png"
            class="slide-content__img"
            alt="Картинка"
            loading="lazy"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="slide-content flex">
          <div class="slide-content__text">
            <img
              class="bunner-logo margin-logo-2"
              src="@/assets/images/bunner-logo-2.svg"
              alt="лого слайда"
            />
            <h1 class="slide-content__title">
              Хирургические сшивающие аппараты «Panther»
            </h1>
            <div class="slide-content__descr">
              Cтоят в одном ряду с аппаратами известных мировых производителей
            </div>
            <nuxt-link to="/" class="slide-content__button flex"
              >перейти в каталог</nuxt-link
            >
          </div>
          <img
            src="@/assets/images/staplers.png"
            class="slide-content__img"
            alt="Картинка"
            loading="lazy"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.slider {
  margin-top: 53px;
  width: 100%;
  background-color: #fff;
  border-radius: 45px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.slide-content {
  height: 620px;
  position: relative;
  padding: 0 75px;
  align-items: center;
}

.slide-content__text {
  max-width: 430px;
  z-index: 10;
}

.bunner-logo {
  width: 184px;
  height: 74px;
  object-fit: contain;
  margin-bottom: 29px;
}

.margin-logo-2 {
  margin-left: -20px;
}

.slide-content__title {
  margin-bottom: 11px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 700;
}

.slide-content__descr {
  margin-bottom: 39px;
  font-size: 18px;
  line-height: 23px;
}

.slide-content__button {
  width: 204px;
  height: 48px;
  color: #ebf4fc;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px rgb(26, 62, 139),
    inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgb(50, 87, 164);
  z-index: 10;
}

.slide-content__img {
  position: absolute;
  bottom: -4px;
  right: 20px;
}

:deep(.swiper-button-next::after) {
  content: url(../assets/images/next-button.png);
}

:deep(.swiper-button-prev::after) {
  content: url(../assets/images/prew-button.png);
}

:deep(.swiper-button-prev) {
  top: 72%;
  left: calc(50% - 300px);
}

:deep(.swiper-button-next) {
  top: 72%;
  left: calc(50% - 245px);
}
</style>