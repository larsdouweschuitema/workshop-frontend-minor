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
          return ('overview-click')
        }
        return ('favorite-click')
      }
    }
  }
</script>

<style lang="scss">
  .toggle {
    margin: 0.2rem;
    display: block;
    padding: 0.1rem;
    border-radius: 9px;
    background: white;
  }

  .toggle_label {
    margin: 0.2rem;
    padding: 0.1rem;
    border-radius: 6px;
    background: pink;
    text-align: center;
  }

  .toggle_radio:checked + .toggle__label {
    background: yellow;
  }
</style>
