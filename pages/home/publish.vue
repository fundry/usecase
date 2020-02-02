<template >
  <div id="body">
    <br />

    <div>
      <img alt="illustration" src="../../assets/svg/sample.svg" />
    </div>

    <h3>Publish your Usecase In Few Steps ...</h3>

    <p>Publish your usecase without having to manually write about it.</p>

    <b-button size="lg" class="button--black">
      <BIconPlay font-scale="1" />See Demo
    </b-button>
  </div>
</template>

<script>
import { BIconPlay, BButton } from 'bootstrap-vue'
// import styled from "vue-styled-components";------ not installed

export default {
  name: 'Publish',
  components: {
    BIconPlay,
    BButton
  }
}
</script>

<style scoped>
#icon {
  width: 30px;
  height: 30px;
  color: #000;
}

#icon-text {
  font-size: 0.9em;
}

h4 {
  text-align: center;
}

#button {
  display: flex;
  background: transparent;
  color: black;
  border: 1px solid black;
  padding: 0.3em 4em;
  border-radius: 5px;
}

#body {
  text-align: center;
}

p {
  text-align: center;
}
</style>