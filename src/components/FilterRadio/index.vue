<template>
  <section class="filter-radio">
    <h2>Property type</h2>

    <form @change="handleTypeFilter">
      <div>
        <input id="type-house" type="radio"  value="house" name="type-filter">
        <label for="type-house">House</label>
      </div>

      <div>
        <input id="type-appartment" type="radio" value="appartment" name="type-filter">
        <label for="type-appartment">Appartment</label>
      </div>

      <div>
        <input id="type-all" type="radio" value="all" name="type-filter">
        <label for="type-all">All houses</label>
      </div>
    </form>

    <span>type: {{ selectedType }}</span>
  </section>
</template>

<script>
import filterData from '@/lib/filter-data'

export default {
  data() {
    return {
      selectedType: ''
    }
  },

  methods: {
    handleTypeFilter(event) {
      this.setSelectedType(event.target.value)

      return this.$store.commit('setHouseType', { houseType: event.target.value })
    },
    setSelectedType(type) {
      this.selectedType = type
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
