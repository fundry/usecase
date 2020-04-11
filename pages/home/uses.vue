<template >
  <div class="body">
    <div v-if="$mq === 'mobile'" class="mobile-track">
      <div>
        <h4>Keep track of small contributions</h4>
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
      </div>
      <img alt="Point illustration" src="../../assets/svg/sample.svg" />

      <br />
    </div>

    <div v-else>
      <div class="track">
        <div>
          <h3>Keep track of small contributions</h3>
          <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        </div>
        <img alt="Point illustration" src="../../assets/svg/sample.svg" />
      </div>

      <br />
      <br />
      <div class="myst">
        <img alt="Point illustration" src="../../assets/svg/sample.svg" />

        <div>
          <h3>Engineering Demystified</h3>

          <p>Get a sneek peek into production level engneering infrastructures and see how they are glued together.</p>
        </div>
      </div>
    </div>
    <br />
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

.myst {
  display: flex;
  justify-content: space-between;
  text-align: right;
  & h3 {
    padding-right: 20px;
    text-align: right;
    color: #361f94;
  }
  & p {
    text-align: right;
    margin-left: 12rem;
  }
}

#body {
  padding: 0.5em;
}

img {
  max-width: 20em;
}

p {
  margin-left: 2em;
  margin-right: 2em;
}
</style>