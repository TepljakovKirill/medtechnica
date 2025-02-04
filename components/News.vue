<script setup>
defineProps({
  news: Object,
});
</script>


<template>
  <div class="news">
    <img :src="news.imageUrl" alt="Превью" />
    <div class="news-content">
      <div class="news-data flex">
        <p class="news-data__number">{{ news.dataNumber }}</p>
        <div class="news_star-block">
          <span v-for="star in news.stars || 0" :key="'gold-' + star">
            <img class="product-star" src="/images/star.png" alt="Звезда" />
          </span>
          <span v-for="star in 5 - news.stars" :key="'empty-' + star">
            <img
              class="product-star"
              src="/images/Star-transparent.png"
              alt="Пустая звезда"
            />
          </span>
        </div>
      </div>
      <h2 class="news-title">
        {{ news.title }}
      </h2>
      <nuxt-link to="/" class="news-link">Читать дальше</nuxt-link>
      <p class="news-author">Автор: {{ news.author }}</p>
    </div>
  </div>
</template>


<style scoped>
.news {
  max-width: 390px;
  border-radius: 15px;
  background-color: #fff;
  padding-top: 31px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 23px;
  border: 0.2px solid rgb(239, 245, 254);
  transition: 0.3s ease-in;
}

.news:hover {
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25),
    0px 20px 50px 0px rgba(73, 122, 226, 0.2);
  transition: 0.3s ease-in;
}

.news-content {
  position: relative;
}

.news-data {
  margin-top: 22px;
  justify-content: space-between;
}

.news-data__number {
  font-size: 10px;
  line-height: 13px;
  color: #3257a4;
}

.news-title {
  margin-top: 13px;
  font-weight: 500;
  font-size: 14px;
  color: #111;
}

.news-link {
  position: relative;
  display: block;
  margin-top: 16px;
  color: #3257a4;
  font-size: 14px;
}

.news-author {
  position: absolute;
  right: 0;
  bottom: 3px;
  font-size: 10px;
  line-height: 13px;
  color: #c41c1b;
}

.news-link::after {
  content: "";
  width: 11px;
  height: 11px;
  position: absolute;
  background-image: url(/_nuxt/assets/images/next.png);
  background-repeat: no-repeat;
  background-size: cover;
  top: 4px;
  left: 110px;
}
</style>