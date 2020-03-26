<template>
  <div>
    <Header owner="Facebook" url="https://facebook.com" />

    <div id="head">
      <div id="flex">
        <img alt="case" src />
        <h5>Jest</h5>
      </div>

      <h4>The Road to Jest V2</h4>

      <h6>Published</h6>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" >
import Header from '../../components/header.vue'
import Footer from '../../components/footer.vue'

export default {
  name: 'usecase',
  components: {
    Header,
    Footer
  }
}
</script>

<style style="postcss" >
#head {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>