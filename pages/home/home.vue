<template>
  <div>
    <div class="hello">
      <Organization />
      <br />

      <div>
        <Uses />
        <Mystified />
        <Individual />

        <Recent />
        <Document />
        <Features />
      </div>
    </div>
  </div>
</template>

<script>
import {
  Recent,
  Banner,
  Uses,
  Document,
  Features,
  Mystified,
  Organization,
  Individual
} from './'

export default {
  name: 'Home',
  components: {
    Banner,
    Recent,
    Mystified,
    Features,
    Document,
    Uses,
    Individual,
    Organization
  }
}
</script>

<style scoped lang="postcss" >
.body {
  padding: 0.5em;
  color: black;
  & p {
    font-size: 2rem;
  }
  @media (--sm) {
    padding: 0.5rem 0.5rem;
    & p {
      font-size: 1rem;
      color: black;
    }
  }
  @media (--md) {
    padding: 1rem 2rem;
    & p {
      font-size: 1.2rem;
      color: black;
    }
  }
  @media (--lg) {
    padding: 1rem 2rem;
    & p {
      font-size: 1.2rem;
      color: green;
    }
  }
  @media (--xl) {
    padding: 1rem 9rem;
    & p {
      font-size: 1.2rem;
      color: brown;
    }
  }
}

#desc {
  padding: 1em;
  text-align: center;
  font-size: 1.4rem;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
