<template>
  <header>
    <nav class="body" id="contain">
      <div id="flex">
        <div id="flex">
          <h3 id="title">
            <nuxt-link to="/">Usecase</nuxt-link>
          </h3>

          <h5 id="own">| {{owner}}</h5>
        </div>

        <!-- BIGGER DISPLAYS -->
        <div id="input-box" v-if="$mq !== 'tablet' && $mq  !== 'mobile' && page !== 'service' ">
          <div id="flex">
            <BIconSearch id="icon" v-if="searching === false" />
            <BIconX id="icon" v-else />
            <input type="text" placeholder="Search Case" />
          </div>
        </div>
      </div>

      <!-- MOBILE VIEW -->
      <div v-if="$mq === 'mobile'">
        <BIconList font-scale="2" id="icon" />
      </div>

      <!-- BIGGER  VIEWS -->
      <div v-else>
        <ul v-if="page !== 'service'">
          <li>
            <router-link to="/usecases/cases" id="link">Cases</router-link>
          </li>
          <li>
            <router-link to="/login" id="link">Login</router-link>
          </li>
          <a href="https://app-usecase.netlify.com" _about>
            <button>Create Account</button>
          </a>
        </ul>

        <div id="input-box" v-else>
          <div id="flex">
            <BIconSearch id="icon" v-if="searching === false" />
            <BIconX id="icon" v-else />
            <input type="text" placeholder="Search Case" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" >
import { BIconList, BIconSearch, BIconX } from 'bootstrap-vue'

export default {
  name: 'Header',
  components: { BIconList, BIconSearch, BIconX },
  data: () => {
    return { searching: false }
  },
  props: ['owner', 'url', 'page']
}
</script>

<style scoped>
#own {
  padding-top: 10px;
  padding-left: 5px;
}

#icon {
  padding-top: 10px;
  font-size: 2.1rem;
}

input[type='text'] {
  padding: 0.3em;
  border: 0px;
  background: transparent;
  height: 40px;
  outline: 0px;
  width: 22em;
  border-radius: 0px;
  padding-left: 15px;
}

#input-box {
  margin-left: 30px;
  border-radius: 5px;
  padding: 0.2em;
  width: 27em;
  height: 44px;
  box-shadow: 0px 3px 5px grey;
}

#contain {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.9em 1em;
  padding-top: 10px;
  box-shadow: 0px 3px 5px grey;
}

button {
  background: #361f94;
  color: #fff;
  outline: 0px;
  border: 0px;
  padding: 0.6em 1.1em;
  border-radius: 5px;
  margin-left: 20px;
}

#title {
  color: chocolate;
  font-weight: lighter;
  padding-top: 4px;
  font-size: 1.7em;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
  font-size: 1.2rem;
}
#link {
  color: #42b983;
  margin-left: 15px;
}
</style>
