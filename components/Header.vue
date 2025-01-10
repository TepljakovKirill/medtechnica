<script setup>
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="header-wrap flex">
        <div class="header-logo__group flex">
          <nuxt-link to="/">
            <img src="@/assets/images/logo.png" alt="Логотип" />
          </nuxt-link>
          <div class="header-catalog">
            <nuxt-link to="/catalog" class="header-catalog__link flex">
              <img src="@/assets/images/menu-burger.png" alt="Меню" />
              Каталог
            </nuxt-link>
          </div>
          <div class="header-search">
            <input
              type="text"
              v-model="searchQuery"
              class="header-search__input"
              placeholder="Поиск медецинского оборудования"
            />
            <button @click="handleSearch" class="header-search__button">
              <img src="@/assets/images/menu-search.png" alt="Поиск" />
            </button>
          </div>
          <div class="header-call__wrap"></div>
          <button @click="callBack" class="header-call__button">
            <img src="@/assets/images/fone.png" alt="Телефон" />
            Заказать обратный звонок
          </button>
          <p class="header-fone">8 (3412) 65-08-77</p>
          <div class="header-social">
            <nuxt-link to="/" class="header-social__link">
              <img src="@/assets/images/viber.png" alt="Вайбер" />
            </nuxt-link>
            <nuxt-link to="/" class="header-social__link">
              <img src="@/assets/images/telegram.png" alt="Телеграм" />
            </nuxt-link>
            <nuxt-link to="/" class="header-social__link">
              <img src="@/assets/images/whatsapp.png" alt="Ватсап" />
            </nuxt-link>
          </div>
        </div>
        <div class="header-menu__group flex">
          <HeaderNavBar />
          <div class="header-menu__personal flex">
            <nuxt-link to="/" class="header-menu__personal-link flex">
              <img src="@/assets/images/сomparisons.png" alt="Сравнения" />
              <p class="personal-link__descr">Сравнения</p>
            </nuxt-link>

            <nuxt-link to="/" class="header-menu__personal-link flex">
              <img src="@/assets/images/basket.png" alt="Корзина" />
              <p class="personal-link__descr">Корзина</p>
            </nuxt-link>

            <nuxt-link to="/" class="header-menu__personal-link flex">
              <img src="@/assets/images/doctor.png" alt="Доктор" />
              <p class="personal-link__descr">Личный кабинет</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  width: 100%;
  background-color: white;
}

.header-wrap {
  height: 150px;
  flex-direction: column;
  justify-content: center;
}

.header-logo__group {
  width: 100%;
  margin-bottom: 23px;
  justify-content: space-between;
  align-items: center;
}

.header-catalog__link {
  align-items: center;
  text-transform: uppercase;
  color: #111;
}

.header-catalog__link img {
  margin-right: 7px;
}

.header-search {
  position: relative;
}

.header-search__button {
  position: absolute;
  left: 10px;
  top: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.header-search__input {
  width: 314px;
  height: 36px;
  padding-left: 40px;
  font-family: "Geometria";
  color: #111;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25);
}

.header-search__input::placeholder {
  color: #111;
}

.header-search__input:focus {
  outline: 0;
  box-shadow: 0 0 0 0.1rem rgba(50, 87, 164, 0.25);
}

.header-call__button {
  border: none;
  background-color: transparent;
  color: #3257a4;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #3257a4;
}

.header-fone {
  font-size: 18px;
}

.header-social__link:not(:last-child) {
  margin-right: 5px;
}

.header-menu__group {
  justify-content: space-between;
  align-items: center;
}

.header-menu__personal {
  align-items: center;
}

.header-menu__personal-link {
  height: 40px;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #111;
}

.header-menu__personal-link:not(:last-child) {
  margin-right: 30px;
}

.header-menu__personal-link:hover .personal-link__descr {
  color: #3257a4;
  transition: 0.3s ease-in;
}
</style>