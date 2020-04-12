<template >
  <div class="body">
    <br />
    <div v-if="$mq === 'mobile' || $mq === 'tablet' " class="mobile">
      <div>
        <h4>External Tooling Integration</h4>
        <br />
        <img alt="Point illustration" src="../../assets/svg/sample.svg" />
        <br />
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        <br />
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
      </div>

      <br />
      <img alt="Point illustration" src="../../assets/svg/folder.svg" />
      <div>
        <h4>A Written Living Archive</h4>
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
        <br />
        <p>Integrate your usecase with your development tools and keep track of small contributions and write about them</p>
      </div>
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
      <br />

      <div class="archive">
        <div class="image">
          <img alt="Point illustration" src="../../assets/svg/folder.svg" />
        </div>
        <div>
          <h3>A Written Living Archive</h3>
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
.mobile {
  & p {
    padding: 0.5rem 1rem;
    line-height: 2.1rem;
    color: #1d3c6a;
  }
  @media (--sm) {
    & p {
      padding: 0.5rem 2rem;
      font-size: 1.1rem;
    }
  }
  @media (--md) {
    & p {
      padding: 0.5rem 3rem;
      font-size: 1.2rem;
    }
  }
  @media (--lg) {
    & p {
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
    }
  }
  @media (--xl) {
    & p {
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
    }
  }
}

.body {
  animation: 2s appear;
  & h4 {
    color: #361f94;
    font-weight: medium;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
    line-height: 2.3rem;
    width: 70%;
    color: #1d3c6a;
  }
  & img {
    padding: 2rem 5rem;
    height: auto;
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
    & img {
      padding: 2rem 5rem;
      height: auto;
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
    & img {
      padding: 2rem 5rem;
      height: auto;
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
    & img {
      padding: 4rem 5rem;
      height: 27vh;
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
    & img {
      padding: 2rem 15rem;
      height: 37vh;
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
  & img {
    padding: 4rem 6rem;
    height: auto;
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
    & img {
      padding: 4rem 2rem;
      height: auto;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
    & h3 {
      font-size: 1.7rem;
      font-weight: semi-bold;
    }
    & img {
      padding: 4rem 2rem;
      height: auto;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.3rem;
      margin-left: 10rem;
    }
    & h3 {
      font-size: 1.8rem;
      font-weight: semi-bold;
    }
    & img {
      padding: 4rem 4rem;
      height: 37vh;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.4rem;
      margin-left: 7rem;
    }
    & h3 {
      font-size: 1.9rem;
      font-weight: semi-bold;
    }
    & img {
      padding: 4rem 17rem;
      height: 45vh;
    }
  }
}
</style>