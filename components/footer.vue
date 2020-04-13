<template>
  <div>
    <hr />
    <div class="create">
      <p>Recently made a hard choice ?</p>
      <button>Document With UseCase</button>
    </div>

    <!-- MOBILE VIEW -->
    <footer id="footer" v-if="$mq === 'mobile'">
      <div id="foot-mobile">
        <div id="brand-mobile">
          <h3 id="brand">
            <a href="/">Usecase.io</a>
          </h3>

          <div id="media-icons-mobile">
            <BIconWallet id="icon" />
            <BIconWallet id="icon" />
            <BIconWallet id="icon" />
          </div>
        </div>

        <div id="mobile-sections">
          <div id="column">
            <h5 id="title">PRODUCT</h5>
            <router-link to="/service/service">Resources</router-link>
            <a>Documentation</a>
            <a>Api</a>
          </div>

          <div id="column">
            <h5 id="title-mobile">ABOUT</h5>
            <div>
              <a>Resources</a>
            </div>
          </div>

          <div id="column">
            <h5 id="title-mobile">MORE</h5>
            <div>
              <a>Resources</a>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom">
        <p>
          Copyright @2020 ,
          All rights reserved.
        </p>
      </div>
    </footer>

    <!-- VIEWS BIGGER THAN MOBILE -->
    <footer id="footer" v-else>
      <div id="foot">
        <div>
          <h3 id="brand">
            <a href="/">Usecase.io</a>
          </h3>

          <div id="media-icons">
            <BIconWallet id="icon" />
            <BIconWallet id="icon" />
            <BIconWallet id="icon" />
          </div>
        </div>
        <div>
          <div id="column">
            <h5 id="title">PRODUCT</h5>
            <router-link to="/service/service">Resources</router-link>
            <a>Documentation</a>
            <a>Api</a>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">ABOUT</h5>
            <div>
              <a>Legal</a>
            </div>
          </div>
        </div>

        <div>
          <div id="column">
            <h5 id="title">MORE</h5>
            <div>
              <a>Social</a>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom">
        <p>
          Copyright @2020 ,
          All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { BIconWallet } from 'bootstrap-vue'

export default {
  name: 'Footer',
  components: {
    BIconWallet
  }
}
</script>

<style scoped lang="postcss" >
.create {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-content: center;
  align-items: center;
  padding: 5px 15px;
  justify-content: space-between;
  & button {
    padding: 0.7rem 3rem;
    border: 1px solid #000;
  }
  @media (--sm) {
    display: grid;
    padding: 5px 15px;
    justify-content: space-between;
  }
  @media (--md) {
    display: flex;
    flex-direction: row;
    padding: 5px 15px;
    justify-content: space-between;
  }
  @media (--lg) {
    display: flex;
    flex-direction: row;
    padding: 5px 15px;
    justify-content: space-between;
  }
  @media (--xl) {
    display: flex;
    flex-direction: row;
    padding: 5px 15px;
    justify-content: space-between;
  }
}
a {
  text-decoration: none;
}

/* duplicate css will be replcaed by media queries later on  */
#media-icons {
  font-size: 1.15em;
  display: flex;
  justify-content: space-between;
}

#media-icons-mobile {
  font-size: 0.9em;
  display: flex;
  justify-content: space-around;
}

#mobile-sections {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

#footer {
  padding: 0.5em 1em;
  background: #e5e5e5;
}

#foot {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

#foot-mobile {
  padding: 0.3em;
}

#brand {
  margin-top: 20px;
  font-weight: lighter;
}

#brand-mobile {
  text-align: center;
}

#bottom {
  margin: 0.3em;
  text-align: center;
  font-size: 0.77em;
  color: black;
}

#column {
  flex-direction: column;
  display: grid;
}

#title {
  padding-bottom: 10px;
  font-weight: bold;
}

#title-mobile {
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 1.1em;
}

button {
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.1em 1.3em;
  border-radius: 5px;
}

p {
  font-weight: lighter;
  font-size: 1.25em;
}

a {
  color: chocolate;
}
</style>
