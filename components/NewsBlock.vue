<script setup>
import { useNewItems } from "@/stores/root";
import { storeToRefs } from "pinia";

const newItemsNews = useNewItems();
newItemsNews.getNews();

const { news } = storeToRefs(newItemsNews);
</script>


<template>
  <div class="news-block">
    <h1 class="news-block-title">Последние новости</h1>
    <div class="news-block__wrapper flex">
      <News v-for="item in news" :key="item.id" :news="item" />
    </div>
  </div>
</template>


<style scoped>
.news-block {
  margin-top: 81px;
  margin-bottom: 122px;
}

.news-block-title {
  margin-bottom: 41px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #3257a4;
}

.news-block__wrapper {
  justify-content: space-between;
}
</style>