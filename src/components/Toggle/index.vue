<template>
  <form class="toggle" @change="onChange">
    <input
      type="radio"
      id="overview-input"
      class="toggle_radio off-screen"
      name="toggle-input"
      value="overview"
      checked
    >
    <label
      for="overview-input"
      class="toggle_label"
    >
      overview
    </label>
    <input
      type="radio"
      id="favorites-input"
      class="toggle_radio off-screen"
      name="toggle-input"
      value="favorite"
    >
    <label
      for="favorites-input"
      class="toggle_label"
    >
      favorieten
    </label>
  </form>
</template>

<script>
/* eslint-disable */
  export default {
    methods: {
      onChange(event) {
        if (event.target.value === 'overview') {
          return this.$emit('overview-click')
        }

        return this.$emit('favorite-click')
      }
    }
  }
</script>

<style lang="scss">
  $toggle-border-radius: 10px;
  $toggle-label-border-radius: 7px;

  .toggle {
    display: flex;
    padding: 0.5rem;
    border-radius: $toggle-border-radius;
    background: white;
  }

  .toggle_label {
    flex: 0 0 50%;
    padding: 0.5rem 0;
    border-radius: $toggle-label-border-radius;
    background: white;
    text-align: center;
  }

  .toggle_radio:checked + .toggle__label {
    background: yellow;
  }
</style>
