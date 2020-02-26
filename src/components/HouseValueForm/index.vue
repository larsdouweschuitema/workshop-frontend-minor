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

    <p class="feedback"></p>

    <button @click.prevent="onSubmit">Continue</button>
  </form>
</template>

<script>
import Store from "@/store";

export default {
  data() {
    return {
      formData: {
        zipCode: "",
        houseNo: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const houses = Store.state.houses;

      const userInput = {
        zip_code: this.formData.zipCode,
        house_number: this.formData.houseNo
      };

      const match = houses.filter(
        item =>
          item.zip_code == userInput.zip_code &&
          item.street_address.split(" ")[0] === userInput.house_number
      );

      console.log("matched house: ", match[0]);

      document.querySelector(
        ".feedback"
      ).innerHTML = `We found your house: ${match[0].street_address}, ${match[0].zip_code} ${match[0].city}`;
    }
  }
};
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
