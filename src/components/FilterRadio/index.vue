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

    <span>type: {{houseType}}</span>
  </section>
</template>

<script>
import filterData from '@/lib/filter-data'

export default {
  data() {
    return {
      houseType: ''
    }
  },

  methods: {
    handleTypeFilter(event) {
      this.setHouseType(event.target.value)

      if (event.target.value === 'all') {
        return // all data
      }

      const options = { key: 'type', value: event.target.value }
      const filteredData = filterData(this.$store.state.houses, options)

      // TODO: make a commit to the store that takes all filtered things and
      // sets the store data to the new data. Or return all data otherwise.
    },
    setHouseType(type) {
      this.houseType = type
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
