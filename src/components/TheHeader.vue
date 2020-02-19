<template>
  <header>
    <img :src="logo" style="width: 100px" />
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/foo'>Foo</router-link>
    </nav>
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
