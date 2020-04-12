<template >
  <div class="body">
    <br />

    <div v-if="$mq === 'mobile'">
      <div class="contain">
        <div>
          <img alt="illustration" src="../../../assets/svg/sample.svg" />
        </div>

        <h3>Publish</h3>

        <p>Publish your usecase without having to manually write about it.</p>
      </div>
      <br />
      <div class="contain">
        <div>
          <img alt="illustration" src="../../../assets/svg/sample.svg" />
        </div>

        <h3>Query</h3>
        <p>Publish your usecase without having to manually write about it.</p>
      </div>
      <br />
    </div>

    <div class="items" v-else>
      <div class="contain">
        <div>
          <img alt="illustration" src="../../../assets/svg/sample.svg" />
        </div>

        <h3>Publish.</h3>

        <p>Publish your usecase without having to manually write about it.</p>
      </div>

      <div class="contain">
        <div>
          <img alt="illustration" src="../../../assets/svg/api.svg" />
        </div>

        <h3>Query</h3>

        <p>Publish your usecase without having to manually write about it .</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconPlay, BButton } from 'bootstrap-vue'

export default {
  name: 'Publish',
  components: {
    BIconPlay,
    BButton
  }
}
</script>

<style scoped lang="postcss" >
#img {
  text-align: center;
  max-width: 10rem;
}

.items {
  display: flex;
  justify-content: space-around;
}

.contain {
  margin: 0.7rem;
  & h3 {
    text-align: center;
    color: #361f94;
  }
  & div {
    text-align: center;
  }
  & p {
    text-align: center;
    color: #1d3c6a;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
      padding: 0rem 2rem;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
      padding: 0rem 2rem;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.3rem;
      padding: 0rem 2rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.4rem;
      padding: 0rem 3rem;
    }
  }
}
</style>