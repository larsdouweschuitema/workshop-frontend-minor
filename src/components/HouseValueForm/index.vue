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
        zipCode: "",
        houseNo: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const data = [
        {
          id: 0,
          city: "Emardview",
          zip_code: "48566",
          street_address: "70421 Jefferey Fall",
          type: "appartment",
          price: "283.274,00 €",
          isSaved: true
        },
        {
          id: 1,
          city: "South Ceciliamouth",
          zip_code: "77000",
          street_address: "91604 Marcellus Manors",
          type: "house",
          price: "160.837,00 €",
          isSaved: false
        }
      ];

      const userInput = {
        zip_code: this.formData.zipCode,
        house_number: this.formData.houseN
      };

      console.log("user input: ", userInput);

      const match = data.filter(
        item =>
          item.zip_code === userInput.zip_code &&
          item.house_number === userInput.house_number
      );
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
