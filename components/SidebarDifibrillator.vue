<script setup>
</script>

<template>
  <div class="defibrillator-container flex">
    <div class="defibrillator-filter">
      <div class="form-group-price flex">
        <label class="priceFrom-label" for="priceFrom"
          >Цена от:
          <div class="input-wrapper">
            <input
              type="text"
              id="priceFrom"
              name="priceFrom"
              class="priceFrom-input"
              placeholder="0"
            />
            <span class="currency">₽</span>
          </div>
        </label>

        <label class="priceUpTo-label" for="priceUpTo"
          >Цена до:
          <div class="input-wrapper">
            <input
              type="text"
              id="priceUpTo"
              name="priceUpTo"
              class="priceUpTo-input"
              placeholder="250 000"
            />
            <span class="currency">₽</span>
          </div>
        </label>
      </div>
      <div class="form-group-filter">
        <p class="form-group-filter__title">Назначение</p>
        <div class="form-group__wrap flex">
          <label><input type="checkbox" /> Промышленные предриятия</label>
          <label><input type="checkbox" /> Общественные здания</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.defibrillator-container {
  width: 389px;
  justify-content: end;
  padding-top: 48px;
  padding-right: 12px;
  background-color: #fff;
}

.defibrillator-filter {
  max-width: 273px;
}

.form-group-price {
  margin-bottom: 38px;
}

.input-wrapper {
  position: relative;
  display: inline-block;
}

.currency {
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 14px;
  color: #111;
}

.priceFrom-label,
.priceUpTo-label {
  color: #111;
  font-family: "Geometria";
  font-size: 14px;
}

.priceFrom-input,
.priceUpTo-input {
  margin-top: 11px;
  padding-top: 10px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 25px;
  width: 136px;
  outline: none;
  border: 1px solid #3257a4;
  font-family: "Geometria";
}

.priceFrom-input {
  border-radius: 5px 0px 0px 5px;
}

.priceUpTo-input {
  border-radius: 0px 5px 5px 0px;
}

.priceFrom-input::placeholder,
.priceUpTo-input::placeholder {
  font-size: 14px;
  color: #111;
}

.priceUpTo-input {
  border-left: none;
}

.form-group-filter__title {
  padding-bottom: 16px;
  color: #111;
}

.form-group__wrap {
  flex-direction: column;
}
</style>