<template>
  <div>
    <Header />
    <div>
      <Home />
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueApollo from 'vue-apollo'

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Home from './home/home.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 1100,
    laptop: 1700,
    desktop: Infinity
  }
})

export default {
  head() {
    return {
      title: 'Home',
      script: [
        { src: '//unpkg.com/vue@latest/dist/vue.min.js' },
        { src: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js' },
        {
          src:
            '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js'
        }
      ],
      link: [
        {
          rel: 'text/css',
          href: '//unpkg.com/bootstrap/dist/css/bootstrap.min.css'
        },
        {
          rel: 'text/css',
          href: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css'
        }
      ]
    }
  },

  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<style>
#icon {
  font-size: 1.7rem;
  color: #000;
  padding-top: 2px;
}

#flex {
  display: flex;
}

.body {
  padding: 1rem;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
