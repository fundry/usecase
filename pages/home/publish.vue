<template >
  <div id="body">
    <br />

    <div>
      <img alt="illustration" src="../../assets/svg/sample.svg" />
    </div>

    <h3>Publish your Usecase In Few Steps ...</h3>

    <p>Publish your usecase without having to manually write about it.</p>
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
h4 {
  text-align: center;
}

#body {
  text-align: center;
}

p {
  text-align: center;
}
</style>