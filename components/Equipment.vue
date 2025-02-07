<script setup>
defineProps({
  isOpen: Boolean,
});

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="equipment-wrap">
    <h1 class="equipment-title">Медицинское оборудование</h1>
    <div class="equipment-list">
      <div class="equipment-container big div1">
        <p class="equipment-container__title">Дефибриляторы</p>
        <nuxt-link to="/catalog/defibrillator">
          <p class="equipment-container__link">перейти в каталог</p>
        </nuxt-link>
        <img
          class="equipmen-img"
          src="@/assets/images/heartsave-list.png"
          alt="Дефибрилятор"
        />
      </div>

      <div class="equipment-container div2">
        <p class="equipment-container__title">Реанимация</p>
        <nuxt-link to="/">
          <p class="equipment-container__link">перейти в каталог</p>
        </nuxt-link>
        <img
          class="equipmen-img"
          src="@/assets/images/resuscitation.png"
          alt="Дефибрилятор"
        />
      </div>

      <div class="equipment-container div3">
        <p class="equipment-container__title">Медицинский инструмент</p>
        <nuxt-link to="/">
          <p class="equipment-container__link">перейти в каталог</p>
        </nuxt-link>
        <img
          class="equipmen-img"
          src="@/assets/images/scissors.png"
          alt="Дефибрилятор"
        />
      </div>

      <div class="equipment-container div4">
        <p class="equipment-container__title">Сшивающие инструменты</p>
        <nuxt-link to="/">
          <p class="equipment-container__link">перейти в каталог</p>
        </nuxt-link>
        <img
          class="equipmen-img sew"
          src="@/assets/images/sew.svg"
          alt="Дефибрилятор"
        />
      </div>

      <div class="equipment-container div5">
        <p class="equipment-container__title">Кислородное оорудование</p>
        <nuxt-link to="/">
          <p class="equipment-container__link">перейти в каталог</p>
        </nuxt-link>
        <img
          class="equipmen-img oxygen"
          src="@/assets/images/oxygen.png"
          alt="Дефибрилятор"
        />
      </div>

      <div v-if="isOpen">
        <div class="equipment-container div6">
          <p class="equipment-container__title">Импланты</p>
          <nuxt-link to="/">
            <p class="equipment-container__link">перейти в каталог</p>
          </nuxt-link>
          <img
            class="equipmen-img implant"
            src="@/assets/images/implant.png"
            alt="Имплант"
          />
        </div>
      </div>
      <div v-else>
        <transition name="fade">
          <div v-show="isVisible" class="fade-block">
            <div class="equipment-container div6">
              <p class="equipment-container__title">Импланты</p>
              <nuxt-link to="/">
                <p class="equipment-container__link">перейти в каталог</p>
              </nuxt-link>
              <img
                class="equipmen-img implant"
                src="@/assets/images/implant.png"
                alt="Имплант"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div v-if="!isOpen" class="equipment-list__all flex">
      <p @click="toggleVisibility" role="button" class="equipment-list__descr">
        {{ !isVisible ? "Показать всё медицинское оборудование" : "Скрыть" }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.equipment-wrap {
  margin-top: 118px;
}

.equipment-title {
  margin-bottom: 46px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #3257a4;
}

.equipment-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-bottom: 30px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 2 / 2 / 3 / 3;
}
.div4 {
  grid-area: 1 / 3 / 2 / 4;
}
.div5 {
  grid-area: 2 / 3 / 3 / 4;
}

.div6 {
  height: 144px;
}

.big {
  width: 397px;
  height: 311px;
}

.equipment-container {
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-top: 32px;
  padding-left: 34px;
  border-radius: 15px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  transition: 0.3s ease-in;
}

.equipment-container:hover {
  box-shadow: 0 20px 50px rgba(73, 122, 226, 0.2);
  transition: 0.3s ease-in;
}

.equipment-container__title {
  max-width: 173px;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
}

.equipmen-img {
  position: absolute;
  right: -34px;
  bottom: -27px;
}

.sew {
  right: -62px;
  bottom: -78px;
}

.oxygen {
  right: -42px;
  bottom: -33px;
}

.implant {
  right: -10px;
  bottom: -5px;
}

.equipment-container__link {
  width: 150px;
  position: relative;
  color: #3257a4;
}

.equipment-container__link::after {
  content: "";
  width: 11px;
  height: 11px;
  position: absolute;
  background-image: url(../assets/images/next.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 4px;
  right: 5px;
}

.equipment-list__all {
  justify-content: end;
}

.equipment-list__descr {
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: rgb(50, 87, 164);
  font-weight: 400;
  line-height: 18px;
  position: relative;
  cursor: pointer;
}

.equipment-list__descr::after {
  content: "";
  width: 11px;
  height: 11px;
  transform: rotate(90deg);
  position: absolute;
  background-image: url(../assets/images/next.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 4px;
  right: -11px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>