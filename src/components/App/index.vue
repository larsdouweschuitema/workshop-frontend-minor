<template>
    <div>
        <TheHeader />
        <router-view />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import HouseService from '@/services/HouseService'

export default {
  mounted() {
    this.getHouses()
  },
  methods: {
    async getHouses() {
      const res = await HouseService.getHouses()
      this.$store.commit('getHouses', res.data)
    }
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
