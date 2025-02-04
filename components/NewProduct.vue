<script setup>
defineProps({
  product: Object,
});
</script>
<template>
  <nuxt-link to="/" class="product">
    <div class="product-img">
      <img :src="product.imageUrl" alt="Картинка" />
      <div class="product-stars flex">
        <div class="card_star-block">
          <span v-for="star in product.stars || 0" :key="'gold-' + star">
            <img class="product-star" src="/images/star.png" alt="Звезда" />
          </span>
          <span v-for="star in 5 - product.stars" :key="'empty-' + star">
            <img
              class="product-star"
              src="/images/Star-transparent.png"
              alt="Пустая звезда"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="product-description">
      <p class="product-art">арт. {{ product.productArt }}</p>
      <p class="product-title">
        {{ product.title }}
      </p>
      <p class="product-price">{{ product.productPrice }}₽</p>
      <div class="product-buttons flex">
        <button class="product-button cart flex">В корзину</button>
        <button class="product-button purchase flex">Купить</button>
      </div>
    </div>
  </nuxt-link>
</template>
<style scoped>
.product {
  max-width: 284px;
  display: block;
  border: 0.2px solid rgb(239, 245, 254);
  border-radius: 15px;
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25);
  background: rgb(255, 255, 255);
  transition: 0.3s ease-in;
}

.product:hover {
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25),
    0px 20px 50px 0px rgba(73, 122, 226, 0.2);
  transition: 0.3s ease-in;
}

.product-stars {
  position: absolute;
  top: 30px;
  right: 34px;
}

.product-star {
  margin-right: 1px;
}

.product-description {
  padding: 16px 20px;
}

.product-art {
  font-size: 10px;
  color: #355cac;
}

.product-title {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #111;
}

.product-price {
  margin-top: 4px;
  font-size: 10px;
  font-weight: 500;
  color: #c41c1b;
}

.product-buttons {
  margin-top: 24px;
  justify-content: space-between;
}

.product-button {
  width: 100px;
  height: 27px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgb(26, 62, 139),
    inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.cart {
  color: #ebf4fc;
  font-weight: 500;
  border: 0.5px solid rgb(26, 62, 139);
  background: rgb(50, 87, 164);
  transition: 0.3s ease-in-out;
}

.cart:hover {
  background: transparent;
  color: rgb(50, 87, 164);
}

.purchase {
  background: transparent;
  border: 0.5px solid rgb(50, 87, 164);
  color: rgb(50, 87, 164);
  transition: 0.3s ease-in-out;
}

.purchase:hover {
  background: transparent;
  background: rgb(50, 87, 164);
  border: 0.5px solid rgb(50, 87, 164);
  color: rgb(50, 87, 164);
  transition: 0.3s ease-in-out;
  color: #ebf4fc;
}
</style>