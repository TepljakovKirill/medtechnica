<script setup>
</script>

<template>
  <div>
    <div class="container">
      <h1 class="defibrillator-title">Дефибриляторы</h1>
      <div class="defibrillator-settngs flex">
        <div class="defibrillator-container flex">
          <p class="defibrillator-total">Найдено 14 моделей</p>
          <button class="defibrillator-reset">Сросить фильтр</button>
        </div>
        <button class="defibrillator-new">Новинки</button>
      </div>
    </div>
    <div class="wrap-container">
      <SidebarDifibrillator />
    </div>
  </div>
</template>

<style scoped>
.defibrillator-title {
  padding: 44px 0;
  font-size: 24px;
  font-weight: 500;
  color: #3257a4;
}

.defibrillator-settngs {
  padding-bottom: 20px;
  justify-content: space-between;
  border-bottom: 2px solid #3257a4;
}
</style>