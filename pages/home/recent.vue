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
    <div v-bind:key="d.id" v-for="d in data">
      <div id="box">
        <h6 id="org">{{d.name}}</h6>

        <h6 id="title">{{d.Title}}</h6>

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

export default {
  name: 'Home',
  components: {
    BIconSearch,
    BIconBook,
    BIconEye
  },
  data: () => {
    return {
      txt: 'Testing',
      data: [
        {
          key: 1,
          name: 'FlutterWave',
          Title: 'Adopting Hasura Graphql Engine'
        },
        {
          key: 2,
          name: 'Andela',
          Title: 'Adopting Hasura Graphql Engine'
        },
        { key: 3, name: 'Facebook', Title: 'Adopting Hasura Graphql Engine' },
        { key: 3, name: 'Medium', Title: 'Google Kubernettes Engine' }
      ]
    }
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