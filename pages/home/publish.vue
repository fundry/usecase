<template >
  <div class="body">
    <br />

    <div class="items">
      <div class="contain">
        <div>
          <img alt="illustration" src="../../assets/svg/sample.svg" />
        </div>

        <h3>Publish.</h3>

        <p>Publish your usecase without having to manually write about it.</p>
      </div>

      <div class="contain">
        <div>
          <img alt="illustration" src="../../assets/svg/sample.svg" />
        </div>

        <h3>Query</h3>

        <p>Publish your usecase without having to manually write about it.</p>
      </div>

      <div class="contain">
        <div>
          <img alt="illustration" src="../../assets/svg/sample.svg" />
        </div>
        <h3>Share</h3>

        <p>Publish your usecase without having to manually write about it.</p>
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
}

.items {
  display: flex;
  justify-content: space-between;
}

.contain {
  margin: 0.7rem;
  & h3 {
    text-align: center;
  }
  & div {
    text-align: center;
  }
  & p {
    text-align: center;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.2rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.2rem;
    }
  }
}
</style>