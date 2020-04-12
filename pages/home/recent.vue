<template >
  <div class="body">
    <div class="head">
      <h4 v-if="searching === false">Recent Usecases</h4>
      <h4 v-else>Searching :</h4>

      <div
        id="input-box"
        v-if="$mq !== 'tablet'  &&  $mq  !== 'mobile'  "
        @click="searching = true"
      >
        <BIconSearch id="icon" v-if="searching === false" />
        <BIconX id="icon" v-else @click="searching = false" />

        <input type="text" placeholder="Search Case" />
      </div>
      <BIconSearch id="icon" v-else />
    </div>

    <!-- mapping in Vuejs -->
    <div v-if="searching === false">
      <Logo style="text-align : center" />

      <div v-bind:key="U.id" v-for="U in Usecases">
        <div id="box">
          <h6 id="org">{{U.author}}</h6>

          <nuxt-link to="/usecases/usecase">
            <h6 id="title">{{U.title}}</h6>
          </nuxt-link>

          <div id="stats">
            <BIconBook id="icon" />
            <BIconEye id="icon" />
            <BIconBook id="icon" />
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div id="loading">
        <BIconArrowRepeat id="load-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import {
  BIconSearch,
  BIconBook,
  BIconEye,
  BIconArrowRepeat,
  BIconX
} from 'bootstrap-vue'
import { gql } from 'apollo-boost'
import { ALL_USECASES } from '../../data/queries'
import Logo from '../../components/Logo.vue'

new Vue({
  apollo: {
    Usecases: {
      prefetch: true,
      query: ALL_USECASES
    }
  }
})

export default {
  name: 'Recent',
  data: () => {
    return {
      searching: false,
      Usecases: {},
      data: []
    }
  },

  apollo: {
    Usecases: {
      query: ALL_USECASES
    }
  },

  components: {
    BIconSearch,
    Logo,
    BIconX,
    BIconArrowRepeat,
    BIconBook,
    BIconEye
  }
}
</script>

<style scoped lang="postcss" >
.body {
  padding: 0.5em;
  background: aliceblue;
  height: 40vh;
}

.head {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.3em;
  & h4 {
    padding-top: 5px;
    padding-left: 5px;
    color: #361f94;
  }
  & div {
    border: 1px solid #361f94;
    border-radius: 7px;
    padding: 0.55em;
    width: 35em;
    height: auto;
  }
  & input[type='text'] {
    padding: 0.5em;
    border: none;
    background: transparent;
    height: auto;
    outline: 0px;
    width: 30em;
    border-radius: 0px;
    padding-left: 15px;
  }
}

#icon {
  cursor: pointer;
  font-size: 1.8rem;
}

#loading {
  font-size: 3rem;
  text-align: center;
}

#load-icon {
  font-size: 2.5rem;
}

#org {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
}

#title {
  font-weight: normal;
  font-size: 1.2em;
}

#box {
  padding: 0.7em 1.5em;
  background: #fff;
  border-radius: 5px;
  margin: 0.5em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#stats {
  display: flex;
  justify-content: space-evenly;
}
</style>