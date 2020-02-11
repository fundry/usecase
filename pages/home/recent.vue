<template >
  <div id="body">
    <div id="head">
      <h5>Recently Featured Cases</h5>

      <div id="input-box" v-if="$mq === 'tablet'">
        <BIconSearch id="icon" />

        <input type="text" placeholder="Search Case" />
      </div>

      <div id="input-box" v-else-if="$mq === 'laptop'">
        <BIconSearch id="icon" />

        <input type="text" placeholder="Search Case" />
      </div>

      <div v-else-if="$mq === 'mobile'">
        <BIconSearch id="icon" />
      </div>
    </div>

    <!-- mapping in Vuejs -->
    <div v-bind:key="C.id" v-for="C in Cases">
      <div id="box">
        <h6 id="org">{{C.author}}</h6>

        <h6 id="title">{{C.title}}</h6>

        <div id="stats">
          <BIconBook id="icon" />
          <BIconEye id="icon" />
          <BIconBook id="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import Vue from 'vue'
import { BIconSearch, BIconBook, BIconEye } from 'bootstrap-vue'
import { gql } from 'apollo-boost'

const Test = gql`
  query Cases {
    Cases {
      id
      created
      author
      title
    }
  }
`

new Vue({
  apollo: {
    Cases: {
      prefetch: true,
      query: Test
    }
  }
})

export default {
  name: 'Home',
  data: () => {
    return {
      txt: 'Testing',
      Cases: {},
      data: [
        {
          key: 1,
          name: 'FlutterWave',
          Title: 'Adopting Hasura Graphql Engine'
        }
      ]
    }
  },

  apollo: {
    Cases: {
      query: Test
    }
  },

  components: {
    BIconSearch,
    BIconBook,
    BIconEye
  }
}
</script>

<style scoped>
#input-box {
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.3em;
  width: 25em;
  height: auto;
}

h5 {
  padding-top: 7px;
  padding-left: 20px;
}

#body {
  padding: 0.5em;
  background: #e5e5e5;
}
#org {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3em;
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