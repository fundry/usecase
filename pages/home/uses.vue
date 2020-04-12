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

        <div class="image">
          <img alt="Point illustration" src="../../assets/svg/sample.svg" />
        </div>
      </div>

      <br />

      <div class="archive">
        <div class="image">
          <img alt="Point illustration" src="../../assets/svg/folder.svg" />
        </div>
        <div>
          <h3>A Something Written Archive</h3>
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
          <br />
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        </div>
      </div>
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
img {
  max-width: 30rem;
}

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
  justify-content: space-around;
  text-align: right;
  & h3 {
    padding-left: 20px;
    text-align: left;
    color: #361f94;
    font-weight: medium;
  }
  & p {
    text-align: left;
    width: 70%;
    color: #1d3c6a;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
      margin-left: 20px;
    }
    & h3 {
      font-size: 1.6rem;
      font-weight: semi-bold;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
    }
    & h3 {
      font-size: 1.7rem;
      font-weight: semi-bold;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.3rem;
    }
    & h3 {
      font-size: 1.8rem;
      font-weight: semi-bold;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.3rem;
    }
    & h3 {
      font-size: 1.9rem;
      font-weight: semi-bold;
    }
  }
}

.archive {
  display: flex;
  justify-content: space-around;
  text-align: left;
  & h3 {
    padding-right: 40px;
    text-align: right;
    color: #361f94;
    font-weight: medium;
  }
  & p {
    text-align: center;
    line-height: 2.3rem;
    margin-left: 23rem;
    color: #1d3c6a;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
      margin-right: 10px;
    }
    & h3 {
      font-size: 1.6rem;
      font-weight: semi-bold;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
      margin-left: 5rem;
    }
    & h3 {
      font-size: 1.7rem;
      font-weight: semi-bold;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.3rem;
      margin-left: 23rem;
    }
    & h3 {
      font-size: 1.8rem;
      font-weight: semi-bold;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.4rem;
      margin-left: 27rem;
    }
    & h3 {
      font-size: 1.9rem;
      font-weight: semi-bold;
    }
  }
}
</style>