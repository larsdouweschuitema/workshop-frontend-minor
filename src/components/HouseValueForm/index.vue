<template>
  <form class="house-value-form">
    <p>
      <label for="zip-code">Zip code</label>
      <input id="zip-code" v-model="formData.zipCode" placeholder="1234 AB" />
    </p>

    <p>
      <label for="house-no">House no.</label>
      <input id="house-no" v-model="formData.houseNo" placeholder="99" />
    </p>
    

    <button @click.prevent="onSubmit">Continue</button> 
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        zipCode: '',
        houseNo: ''
      }
    }
  },
  methods: {
    onSubmit() {
      alert(this.formData.zipCode)
    }
  }
}
</script>

<style lang="scss" scoped>
  .house-value-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    margin-bottom: 1rem;
    width: 100%;
  }
</style>
