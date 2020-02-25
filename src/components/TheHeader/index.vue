<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <a href="/"><img :src="logo" /></a>
      </div>
      <nav class="main-menu">
        <router-link to='/'>Home</router-link>
        <router-link to='/housevalue'>House value</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/img/logo.svg'

export default {
  data() {
    return {
      logo
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    background: #f7a100;
    height: 52px;
    width: 100%;
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

  .logo {
    flex: 1 0 auto;
    margin: 5px 0;

    img {
      height: 36px;
      width: 101px;  
    }
  }

  .main-menu {
    display: flex;

    a {
      display: block;
      color: white;
      padding: 0 .75rem;
      text-decoration: none;
      line-height: 52px;
      
      &:hover, &:focus {
        background-color: #de9000;
        outline: none;
      }
    }
  }
</style>
