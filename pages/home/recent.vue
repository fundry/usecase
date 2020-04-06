<template >
  <div id="body">
    <div id="head">
      <div v-if="searching === false">
        <h5>Recent Usecases</h5>
      </div>
      <div v-else>
        <h5>Searching : {{searchText}}</h5>
      </div>
      <div id="input-box" v-if="$mq !== 'tablet' && $mq  !== 'mobile'  " @click="searching = true">
        <BIconSearch id="icon" v-if="searching === false" />
        <BIconX id="icon" v-else @click="searching = false" />

        <input type="text" v-model="searchText" placeholder="Search Case" />
      </div>

      <div v-else-if="$mq === 'mobile'">
        <BIconSearch id="icon" />
      </div>
    </div>

    <!-- mapping in Vuejs -->
    <div v-if="searching === false">
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
    BIconX,
    BIconArrowRepeat,
    BIconBook,
    BIconEye
  }
}
</script>

<style scoped>
#icon {
  cursor: pointer;
}

#loading {
  font-size: 3rem;
  text-align: center;
}

#load-icon {
  font-size: 2.5rem;
}

#input-box {
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.3em;
  width: 25em;
  height: auto;
}

h5 {
  padding-top: 7px;
  padding-left: 10px;
}

#body {
  padding: 0.5em;
  background: #e5e5e5;
}
#org {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2em;
}
#head {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
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

input[type='text'] {
  padding: 0.5em;
  border: none;
  background: transparent;
  height: auto;
  outline: 0px;
  width: 21em;
  border-radius: 0px;
  padding-left: 15px;
}
</style>