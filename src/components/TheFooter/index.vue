<template>
  <div>
    <footer class="footer-top">
      <div class="container">
        <section class="footer-top__section">
          <h3>Tools</h3>
          <nav>
            <ul>
              <li><a href="https://www.funda.nl/en/huis-plaatsen/">List your house on funda</a></li>
              <li><a href="https://www.funda.nl/en/makelaars/">Find an NVM agent</a></li>
              <li><a href="https://www.funda.nl/en/koop/bladeren/">Browse</a></li>
              <li><router-link to='/housevalue'>HouseValue</router-link></li>
            </ul>
          </nav>
        </section>

        <section class="footer-top__section">
          <h3>Information</h3>
          <nav>
            <ul>
              <li><a href="https://help.funda.nl/hc/nl/categories/200207038">Frequently asked questions</a></li>
              <li><a href="https://www.funda.nl/en/fundahuis/">The funda house</a></li>
              <li><a href="https://www.funda.nl/meer-weten/starter/">Buy your first house</a></li>
              <li><a href="https://www.funda.nl/meer-weten/verkoper/">Sell your house</a></li>
              <li><a href="https://www.funda.nl/zoekbetervindmeer/">How do I search on funda?</a></li>
            </ul>
          </nav>
        </section>

        <section class="footer-top__section">
          <h3>Real estate agent</h3>
          <nav>
            <ul>
              <li><a href="https://www.fundadesk.nl/">funda desk</a></li>
              <li><a href="https://www.funda.nl/voormakelaars/trends-data/">Trends & data</a></li>
              <li><a href="https://www.funda.nl/voormakelaars/leads/">Leads</a></li>
            </ul>
          </nav>
        </section>

        <section class="footer-top__section">
          <h3>About us</h3>
          <nav>
            <ul>
              <li><a href="https://www.funda.nl/over/">About funda</a></li>
              <li><a href="https://www.funda.nl/en/contact/">Contact</a></li>
              <li><a href="https://jobs.funda.nl/l/en/">Vacancies</a></li>
              <li><a href="https://www.funda.nl/en/adverteren/">Advertising</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>

    <footer class="footer-bottom">
      <div class="container">
        <section class="footer-bottom__section">
          <p>© 2001-2020 funda</p>
          <nav class="footer-bottom__menu">
            <ul>
              <li><a href="https://www.funda.nl/en/privacybeleid/">Privacy</a></li>
              <li><a href="https://www.funda.nl/en/cookiebeleid/">Cookies</a></li>
              <li><a href="https://www.funda.nl/en/gebruiksvoorwaarden/">Terms of use</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

  a {
    color: #0071b3;
    text-decoration: none;

    &:hover, &:focus {
      color: #00517f;
    }
  }

  .container {
    display: flex;
    flex-shrink: 0;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 1020px) {
      width: 984px;
      padding: 0;
    }
  }

  .footer-top {
    background: #ededed;
    padding: 1.75rem 0;   
  }

  .footer-top__section {
    width: 25%;

    h3 {
      font-weight: 600;
      line-height: 2.25rem;
    }

    li {
      line-height: 2.25rem;
    }
  }

  .footer-bottom {
    background: #ededed;
    border-bottom: 4px solid #f7a100;
    border-top: 1px solid #ccc;
    padding: 1rem 0;
    width: 100%;

    p {
      flex: 1 0 auto;
    }
  }

  .footer-bottom__section {
    display: flex;
    width: 100%;
  }

  .footer-bottom__menu {

    ul {
      display: flex;
    }

    li {
      &:not(:last-of-type):after {
        margin-right: 6px;
        margin-left: 6px;
        content: "•";
      }
    }
  }
</style>
