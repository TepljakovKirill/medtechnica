<script setup>
defineProps({
  isHeader: Boolean,
});

const menuItems = [
  { name: "О компании", path: "/about" },
  { name: "Производители", path: "/manufacturers" },
  { name: "Доставка", path: "/delyvery" },
  { name: "Оплата", path: "/payment" },
  { name: "Каталог", path: "/catalog/" },
  { name: "Новости", path: "/news" },
  { name: "Реквизиты", path: "/details" },
  { name: "Контакты", path: "/contacts" },
];

const menuFilter = menuItems.filter((item) => item.path !== "/catalog/");
</script>
<template>
  <nav>
    <ul :class="isHeader ? 'grid' : 'flex'">
      <li
        v-for="item in isHeader ? menuItems : menuFilter"
        :key="item.path"
        :class="isHeader ? 'footer-menu__list' : 'header-menu__list'"
      >
        <NuxtLink
          :to="item.path"
          :class="isHeader ? 'footer-menu__link' : 'header-menu__link'"
          >{{ item.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.header-menu__list:not(:last-child) {
  margin-right: 24px;
}

.header-menu__link {
  color: #111;
}

.footer-menu__link {
  color: #fff;
}

.header-menu__link,
.footer-menu__link {
  font-size: 14px;
  transition: 0.3s ease-in;
}

.header-menu__link:hover,
.footer-menu__link:hover {
  color: #3257a4;
  transition: 0.3s ease-in;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 68px;
  grid-row-gap: 20px;
}
</style>