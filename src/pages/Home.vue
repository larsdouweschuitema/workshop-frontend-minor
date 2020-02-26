<template>
    <main class="main">
        <SearchForm />
        <div class="container">
          <Sidebar />
          <div class="search-results">
            
            <template v-if="houses.length === 0">
              <div>
                0 search results
              </div>
              <div>
                Select a larger search area or remove one or more filters. Some filters, or a combination of filters, yield no results.
              </div>
            </template>
            
            <div class="search-results__item" v-for="house of houses" v-bind:key="house.id">
              <img class="search-results__item-image" src="https://cloud.funda.nl/valentina_media/124/565/893_720x480.jpg" />
              <div class="search-results__item-content">
                <div><a href="https://www.funda.nl/en/koop/axel/huis-41779155-pieter-paulusstraat-19/?navigateSource=resultlist">{{ house.street_address }}</a></div>
                <div>{{ house.zip_code }} {{ house.city }}</div>
                <div style="font-weight: bold;">{{ house.price }} k.k.</div>
                <ul>
                  <li>91 m² / 103 m²</li>
                  <li>3 rooms</li>
                </ul>
                <div><a href="https://www.funda.nl/en/makelaars/terneuzen/20077-van-huisstede-makelaardij-og/">Van Huisstede makelaardij o.g.</a></div>
              </div>
            </div>

          </div>
        </div>
    </main>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import Sidebar from '@/components/Sidebar'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const store = new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    insert(state, house) {
      state.favorites.push(house)
    },
    remove(state, house) {
      state.favorites.splice( state.favorites.indexOf(house), 1 )
    },
    removeAll(state) {
      state.favorites = []
    }
  }
})

export default {
  computed: {
    houses () {
      return this.$store.state.houses || []
    }
  },
  components: {
    SearchForm,
    Sidebar
  },
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  a {
    color: #0071b3;
    text-decoration: none;
    font-weight: 600;

    &:hover, &:focus {
      color: #00517f;
    }
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

  .search-results {
    display: flex; 
    flex-direction: column; 
    padding-left: 1.5rem;
    width: 100%;
  }

  .search-results__item {
    display: flex; 
    border-bottom: 1px solid #ededed;
    padding-bottom: 1rem;

    &:not(:first-of-type) {
      margin-top: 1rem;
    }
  }

  .search-results__item-image {
    width: 14.25rem;
  }

  .search-results__item-content {
    padding-left: 1.5rem;
  }

  ul {
      display: flex;
  }

  li {
    &:not(:last-of-type):after {
      margin-right: 6px;
      margin-left: 6px;
      content: "•";
    }
  }
</style>
