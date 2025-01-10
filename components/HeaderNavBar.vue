<script setup>
const menuItems = [
  { name: "О компании", path: "/about" },
  { name: "Производители", path: "/manufacturers" },
  { name: "Доставка", path: "/delyvery" },
  { name: "Оплата", path: "/payment" },
  { name: "Новости", path: "/news" },
  { name: "Реквизиты", path: "/details" },
  { name: "Контакты", path: "/contacts" },
];
</script>
<template>
  <nav>
    <ul class="flex">
      <li v-for="item in menuItems" :key="item.path" class="header-menu__link">
        <NuxtLink :to="item.path" class="header-menu__link">{{
          item.name
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.header-menu__link:not(:last-child) {
  margin-right: 24px;
}

.header-menu__link {
  font-size: 14px;
  color: #111;
  transition: 0.3s ease-in;
}

.header-menu__link:hover {
  color: #3257a4;
  transition: 0.3s ease-in;
}
</style>