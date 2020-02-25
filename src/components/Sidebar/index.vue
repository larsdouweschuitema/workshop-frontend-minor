<template>
  <aside class="app-sidebar">
    <section class="general-information">
      <div>{{ amountOfHouses }} results</div>
      <div>in homes for sale</div>
    </section>

    <section class="filter-price">
      <h2>Price</h2>
      <select v-model="minPrice">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>

      <select v-model="maxPrice">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <div>minPrice: {{ minPrice }}</div>
      <div>maxPrice: {{ maxPrice }}</div>
      
    </section>

    <FilterRadio />
  </aside>
</template>

<script>
import FilterRadio from '@/components/FilterRadio'

export default {
  data() {
    return {
      minPrice: '',
      maxPrice: ''
    }
  },
  computed: {
    amountOfHouses () {
      return this.$store.state.houses.length
    }
  },
  components: {
    FilterRadio,
  }
}
</script>

<style lang="scss" scoped>
  .app-sidebar {
    width: 228px;
  }

  .general-information {
    margin-bottom: 1.75rem;
    
    div:first-child {
      color: #333;
      font-size: 1.25rem;
      font-weight: 600;
    }

    div:last-child {
      color: #999;
    }
  }

  .filter-price {
    margin-bottom: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid #ededed;
  } 
</style>