<template>
  <section class="filter-radio">
    <h2>Property type</h2>

    <p>
      <input id="type-house" type="radio" v-model="houseType" value="house">
      <label for="type-house">House</label>
    </p>

    <p>
      <input id="type-appartment" type="radio" v-model="houseType" value="appartment">
      <label for="type-appartment">Appartment</label>
    </p>

    <span>type: {{houseType}}</span>
  </section>
</template>

<script>
export default {
  data() {
    return {
      houseType: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-radio {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ededed;
  }
</style>