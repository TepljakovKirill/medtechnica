<script setup>
defineProps({
  product: Object,
});
</script>
<template>
  <div class="product">
    <img :src="product.imageUrl" alt="Картинка" />
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
  </div>
</template>
<style scoped>
.product {
  max-width: 285px;
  border: 0.2px solid rgb(239, 245, 254);
  border-radius: 15px;
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25);
  background: rgb(255, 255, 255);
}

.product-description {
  padding: 16px 23px;
}

.product-art {
  font-size: 10px;
  color: #355cac;
}

.product-title {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
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
  width: 113px;
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