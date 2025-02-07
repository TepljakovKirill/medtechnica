<template>
  <div class="footer">
    <div class="container">
      <div class="footer-container flex">
        <div class="footer-menu flex">
          <div class="footer-logo-social">
            <nuxt-link to="/">
              <img src="@/assets/images/logo.png" alt="Логотип" />
            </nuxt-link>
            <div class="footer-social">
              <nuxt-link to="/" class="footer-social__link">
                <img src="@/assets/images/viber.png" alt="Вайбер" />
              </nuxt-link>
              <nuxt-link to="/" class="footer-social__link">
                <img src="@/assets/images/telegram.png" alt="Телеграм" />
              </nuxt-link>
              <nuxt-link to="/" class="footer-social__link">
                <img src="@/assets/images/whatsapp.png" alt="Ватсап" />
              </nuxt-link>
            </div>
          </div>
          <NavBar :isHeader="true" />
        </div>
        <div class="footer-content flex">
          <div class="footer-call-address">
            <button @click="callBack" class="footer-call__button">
              <img
                class="footer-call"
                src="@/assets/images/fone-white.png"
                alt="Телефон"
              />
              Заказать обратный звонок
            </button>
            <div class="footer-address">
              <p class="footer-address__descr">
                Россия, Удмуртская Республика 426011, г. Ижевск, ул.
                Пушкинская290 тел. 8 (3412) 65-08-77
              </p>
            </div>
          </div>
          <div class="footer-confidentiality">
            <p class="footer-confidentiality__button">
              Политика конфиденциальности
            </p>
            <p class="footer-confidentiality__o">
              ООО «Boksmed» © 2015 - 2022.
            </p>
            <p class="footer-confidentiality__descr">
              Сайт носит информационный характер и не является публичной
              офертой.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.footer {
  width: 100%;
  background-color: black;
}

.footer-container {
  padding-top: 55px;
  padding-bottom: 29px;
  justify-content: space-between;
}

.footer-social {
  margin-top: 28px;
}

.footer-social__link:not(:last-child) {
  margin-right: 5px;
}

.footer-logo-social {
  margin-right: 72px;
}

.footer-content {
  justify-content: space-between;
}

.footer-call-address {
  margin-right: 45px;
  max-width: 270px;
}

.footer-call__button {
  margin-bottom: 33px;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.footer-call {
  padding-right: 4px;
}

.footer-address,
.footer-confidentiality {
  color: #fff;
}

.footer-address__descr,
.footer-confidentiality__descr {
  line-height: 18px;
}

.footer-confidentiality {
  max-width: 285px;
}

.footer-confidentiality__button {
  margin-bottom: 9px;
}

.footer-confidentiality__o {
  margin-bottom: 8px;
}
</style>