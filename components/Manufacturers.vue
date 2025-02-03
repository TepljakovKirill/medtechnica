<script setup>
const brands = ref([
  { name: "AXION", logo: "/images/axion.png" },
  { name: "Boston Scientific", logo: "/images/Boston.png" },
  { name: "Johnson & Johnson", logo: "/images/G&G.png" },
  { name: "KLS Martin", logo: "/images/kls.png" },
  { name: "LR", logo: "/images/lr.png" },
  { name: "Medtronic", logo: "/images/medtrinic.png" },
  { name: "Metrax", logo: "/images/metrax.png" },
  { name: "Panther Healthcare", logo: "/images/panther-2.png" },
  { name: "Smiths Medical", logo: "/images/portex.png" },
  { name: "Karl Storz", logo: "/images/storz.png" },
]);
</script>
<template>
  <div class="manufacturers">
    <h1 class="manufacturers-title">Бренды и заводы производители</h1>
    <div class="manufacturers-block">
      <nuxt-link
        to="/"
        v-for="(brand, index) in brands"
        :key="index"
        class="manufacturers-brand flex"
      >
        <img
          :src="brand.logo"
          :alt="brand.name"
          class="manufacturers-brand__img"
        />
      </nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.manufacturers {
  margin-top: 94px;
  width: 100%;
  border-radius: 45px;
  background: rgb(255, 255, 255);
}

.manufacturers-title {
  padding-top: 49px;
  padding-bottom: 29px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: #3257a4;
}

.manufacturers-block {
  width: 99%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  background: rgba(50, 87, 164, 0.2);
}

.manufacturers-brand {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in;
}

.manufacturers-brand__img {
  border-radius: 15px;
}

.manufacturers-brand:hover .manufacturers-brand__img {
  box-shadow: 0px 0px 50px 0px rgba(73, 122, 226, 0.2);
  background: rgb(255, 255, 255);
  transition: 0.3s ease-in;
}
</style>