<template >
  <div class="body">
    <div v-if="$mq === 'mobile'" class="mobile-track">
      <div>
        <h4>External Tooling Integration</h4>

        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        <br />
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
      </div>
      <img alt="Point illustration" src="../../assets/svg/sample.svg" />

      <br />
    </div>

    <div v-else>
      <div class="track">
        <div>
          <h3>External Tooling Integration</h3>
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
          <br />
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        </div>
        <img alt="Point illustration" src="../../assets/svg/sample.svg" />
      </div>

      <br />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Uses'
}
</script>
 
<style scoped lang="postcss" >
.body {
  padding: 1rem;
  text-align: center;
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
      font-size: 1.3rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.3rem;
    }
  }
}

.track {
  display: flex;
  justify-content: space-between;
  text-align: right;
  & h3 {
    padding-left: 20px;
    text-align: left;
    color: #361f94;
  }
  & p {
    text-align: left;
    width: 70%;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
      margin-left: 20px;
    }
    & h3 {
      font-size: 1.6rem;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
    }
    & h3 {
      font-size: 1.7rem;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.3rem;
    }
    & h3 {
      font-size: 1.7rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.3rem;
    }
    & h3 {
      font-size: 1.7rem;
    }
  }
}
</style>