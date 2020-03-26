<template>
  <div>
    <Header />
    <div id="body">
      <img src="../../assets/svg/sample.svg" alt="Illustration" />
      <p id="explanation">Cases are collection of usecases</p>
    </div>

    <div id="container">
      <div id="contain" v-for="C in Cases" v-bind:key="C.id">
        <h5>{{C.author}}</h5>

        <div id="box">{{C.name}}</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import { gql } from 'apollo-boost'

import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'
import { ALL_CASES } from '../../data/queries'

new Vue({
  apollo: {
    Cases: {
      prefetch: true,
      query: ALL_CASES
    }
  }
})

export default {
  name: 'Cases',
  components: {
    Header,
    Footer
  },

  data: () => {
    return {
      Cases: {}
    }
  },
  apollo: {
    Cases: {
      query: ALL_CASES
    }
  }
}
</script>

<style style="postcss" >
#body {
  padding: 1rem;
  text-align: center;
}

#contain {
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
}

#box {
  padding: 0.8rem 5.5rem;
  border-radius: 5px;
  border: 1px solid #000;
}

#explanation {
  font-size: 1.2rem;
}

#container {
  background: #f2f5ff;
  padding: 1rem;
}
</style>