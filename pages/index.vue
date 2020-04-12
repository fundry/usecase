<template>
  <div class="app">
    <Banner />
    <Home />
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
import Banner from '../components/banner.vue'
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
    Footer,
    Banner
  }
}
</script>

<style>
#flex {
  display: flex;
}
</style>
