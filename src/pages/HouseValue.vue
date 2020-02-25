<template>
    <main class="main">
      <div class="container" style="padding: 1.5rem 0; display: flex;">
        <section>
          <h1>What is the estimated value of your home?</h1>
          <h2>Waardecheck</h2>
        </section>
        <HouseValueForm />
      </div>

      <section class="text-section" style="background: #f7f7f7">
          <div class="container">
            <h3>What's the Waardecheck?</h3>
            <p>
              The Waardecheck is a free online calculation tool by funda. 
              Just 10 seconds and you will have the estimated value of your house.
            </p>
          </div>
      </section>

      <section class="text-section">
        <div class="container">
          <h3>An estimate, not a valuation</h3>
          <p>
            Just so you know, the result of the Waardecheck is not a valuation. 
            If you want to change your mortgage or sell your house you will still need an official valuation. 
            Find a real estate agent who can help you with this.
          </p>
        </div>
      </section>

      <section class="text-section">
        <div class="container">
          <h3>Based on real selling prices</h3>
          <p>
            The Waardecheck is based on data about your house and data from your municipality. 
            These include your location, year of construction, plot and living space, property type and selling prices of similar houses in your area.
          </p>
        </div>
      </section>

      <section class="text-section">
        <div class="container">
          <h3>Always up to date with your home value</h3>
          <p>
            If you sign up for updates you will receive a monthly or quarterly email about your home value. 
            This way, you will always be kept up to date with the latest developments.
          </p>
        </div>
      </section>

      <section class="text-section">
        <div class="container">
          <h3>Safe use of your data</h3>
          <p>
            Checking the value of your house is completely free of obligation. 
            Your details will not be shared with third parties, unless you yourself give permission.
          </p>
        </div>
      </section>

    </main>
</template>

<script>
import HouseValueForm from '@/components/HouseValueForm'

export default {
  components: {
    HouseValueForm
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background: #e6f2f7;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .container {
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 1020px) {
      width: 984px;
      padding: 0;
    }
  }

  .text-section {
    background: white;
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 2.75rem;   
  }

  p {
    max-width: 400px;
  }
</style>
