<template>
  <div class="body">
    <div class="contain">
      <h3>Document Small Personal Projects.</h3>
      <p>Keep track of your small personal projects by writing steps taken in building them and compile after the development process.</p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped lang="postcss" >
.contain {
  & img {
    display: flex;
    cursor: pointer;
    place-items: center;
    justify-content: center;
    text-align: center;
  }
  & h3 {
    text-align: center;
    color: #361f94;
  }
  & p {
    text-align: center;
    padding: 0.5rem 2rem;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
    }
    & h3 {
      font-size: 1.5rem;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.3rem;
    }
    & h3 {
      font-size: 1.6rem;
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