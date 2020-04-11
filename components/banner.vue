<template>
  <div>
    <Header />
    <div class="body">
      <div id="cover" v-if="$mq === 'tablet'">
        <img src="../assets/svg/cover.svg" alt="illustration" class="img" :class="$mq" />
      </div>
      <!-- MOBILE -->
      <div v-if=" $mq === 'mobile' ">
        <br />
        <img src="../assets/svg/cover.svg" alt="illustration" class="img" :class="$mq" />

        <br />
        <br />
        <h1>A Simplistic Writing Console For Everyone</h1>

        <p>Usecase is a Simplistic writing tool, built to improve the writing habit in individuals and organizations</p>
      </div>

      <!-- TABLET -->
      <div v-if="$mq === 'tablet'">
        <h1>A Simplistic Writing Console For Everyone</h1>

        <p>Usecase is a Simplistic writing tool, built to improve the writing habit in individuals and organizations</p>
      </div>
      <!--  LARGE DISPLAYS -->
      <div id="cover" v-else-if="$mq !== 'tablet' && $mq  !== 'mobile'  ">
        <br />
        <div id="flex">
          <br />
          <img src="../assets/svg/cover.svg" alt="illustration" class="img" :class="$mq" />

          <div>
            <br />
            <br />
            <br />
            <h1>A Simplistic Writing Console For Everyone</h1>

            <p>Usecase is a Simplistic writing tool, built to improve the writing habit in individuals and organizations</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './header.vue'

export default {
  name: 'Banner',
  components: { Header }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
#flex {
  display: flex;
  justify-content: center;
}
#cover {
  text-align: center;
}

.body {
  text-align: center;
  padding: 2em;
  background: #f2f5ff;
  color: #1d2279;
  justify-content: center;
  & h1 {
    font-weight: bolder;
    font-size: 2.5rem;
  }
  & p {
    text-align: center;
    font-size: 1.3em;
    padding: 0em 3em 0em;
  }
  & img {
    max-width: 35em;
    height: auto;
    align-self: auto;
  }
  @media (--sm) {
    & h1 {
      font-weight: bolder;
      font-size: 2rem;
    }
    & p {
      font-size: 1.25em;
      padding: 0em 0.5em 0em;
    }
    & img {
      max-width: 18rem;
    }
  }
  @media (--md) {
    & h1 {
      font-size: 2.3rem;
    }
    & p {
      font-size: 1.3em;
      padding: 0em 3em 0em;
    }
    & img {
      max-width: 35rem;
    }
  }
  @media (--lg) {
    & h1 {
      font-size: 2.5rem;
    }
    & p {
      font-size: 1.4em;
      padding: 0em 3em 0em;
    }
    & img {
      max-width: 35rem;
    }
  }
  @media (--xl) {
    & h1 {
      font-size: 3rem;
    }
    & p {
      font-size: 1.5em;
      padding: 0em 9em 0em;
    }
    & img {
      max-width: 40rem;
    }
  }
}
</style>
