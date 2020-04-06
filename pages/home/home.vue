<template>
  <div>
    <Banner />
    <div class="hello">
      <div class="body">
        <p
          id="desc"
        >Usecases fosters writing and proper documentating by letting you write in bits the tiny steps and actions taken towards achieving a goal.</p>
      </div>

      <div class>
        <Uses />
        <Project />

        <Recent />

        <Document />
        <Publish />
      </div>
    </div>
  </div>
</template>

<script>
import Recent from './recent.vue'
import Uses from './uses.vue'
import Document from './document.vue'
import Publish from './publish.vue'
import Project from './projects.vue'

import Banner from '../../components/banner'

export default {
  name: 'Home',

  components: { Banner, Recent, Project, Publish, Document, Uses }
}
</script>

<style scoped lang="postcss" >
.body {
  padding: 0.5em;
  color: black;
  & p {
    font-size: 1rem;
  }
  @media (--sm) {
    padding: 1rem;
    & p {
      font-size: 1.1rem;
    }
  }
  @media (--md) {
    padding: 1rem 2rem;
    & p {
      font-size: 1.2rem;
    }
  }
  @media (--lg) {
    padding: 1rem 4rem;
    & p {
      font-size: 1.2rem;
    }
  }
  @media (--xl) {
    padding: 1rem 7rem;
    & p {
      font-size: 1.2rem;
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
