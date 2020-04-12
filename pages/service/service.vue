<template>
  <div>
    <Header />
    <div class="body">
      <Data />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Data } from './'
import { Header, Footer } from '../../components/'

export default {
  name: 'Service',
  components: {
    Data,
    Header,
    Footer
  }
}
</script>

<style>
</style>