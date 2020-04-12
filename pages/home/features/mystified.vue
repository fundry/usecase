<template>
  <div class="body">
    <div class="contain">
      <h3>Engineering Demystified</h3>
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
    font-size: 1.7rem;
    font-weight: 600;
  }
  & p {
    text-align: center;
    padding: 0.5rem 3rem;
    color: #1d3c6a;
  }
  @media (--sm) {
    & p {
      font-size: 1.1rem;
      padding: 0.5rem 3rem;
    }
    & h3 {
      font-size: 1.5rem;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.3rem;
      padding: 0.5rem 3rem;
    }
    & h3 {
      font-size: 1.6rem;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.4rem;
      padding: 0.5rem 7rem;
    }
    & h3 {
      font-size: 1.8rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.5rem;
      padding: 0.5rem 15rem;
    }
    & h3 {
      font-size: 1.9rem;
    }
  }
}
</style>