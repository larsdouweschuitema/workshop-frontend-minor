<template>
  <form class="search-form">
    <div class="container">
      <input v-model="searchInput" placeholder="City, neighborhood, address, etc." />
        <button @click.prevent="onSubmit">Search</button> 
    </div> 
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchInput: null,
      filteredHouses: []
    }
  },
  computed: {
    houses () {
      return this.$store.state.houses || []
    }
  },
  methods: {
    onSubmit() {
      console.log(this.filterHouses())
    },
    filterHouses() {
      return this.houses.filter(house => {
        
        return house.city.includes(this.searchInput)

      })
    }

  },
  watch: {
    searchInput: function() {
      this.filterHouses()
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-form {
    background: #e6f2f7;
    margin-bottom: 2rem;
    padding: 0.5rem 0;
  }

  .container {
    display: flex;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 1020px) {
      width: 984px;
      padding: 0;
    }
  }

  input {
    background: white;
    border: 1px white solid;
    border-radius: 2px;
    font: 1rem "Open Sans", Arial, sans-serif;
    padding: 11px 16px;
    resize: none;
    width: 100%;
    
    &:hover, &:focus {
      border-color: #999;
      outline: none;
    }
  }

  button {
    background-color: #f7a100;
    border: 1px #f7a100 solid;
    color: #fff;
    cursor: pointer;
    font: 1rem "Open Sans", Arial, sans-serif;
    text-align: center;

    &:hover, &:focus {
      background-color: #de9000;
    }
  }
</style>