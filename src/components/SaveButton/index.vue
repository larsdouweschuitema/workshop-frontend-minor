<template>
    <button class="save-button" @click.prevent="onSave"><svg id="Productie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>heart-filled.colors-white-blue</title><g id="Save_Filled" data-name="Save Filled"><path d="M42,17a10,10,0,0,0-18-6A10,10,0,0,0,6,17H6C6,32,22,41,24,41s18-9,18-24Z"/></g></svg>Save</button>
</template>

<script>
export default {
  methods: {
    onSave() {
      alert(this)
    }
  }
}
</script>

<style scoped>

</style>