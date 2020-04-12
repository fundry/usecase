<template>
  <div class="body">
    <div class="user">
      <div>
        <!-- tiny dot here pushed the `USECASE for` to  the right -->
        .
        <div>
          <h3>Usecase For</h3>
          <h3 id="choco">Individuals</h3>
        </div>
      </div>
    </div>
    <br />

    <div class="items">
      <div class="contain">
        <h4>Personal Joter</h4>
        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
      </div>

      <div class="contain">
        <h4>Personal Joter</h4>
        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
      </div>

      <div class="contain">
        <h4>Personal Joter</h4>
        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
      </div>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: 'Individuals',
  components: {}
}
</script>

<style scoped lang="postcss" >
.user {
  text-align: right;
  & div {
    display: flex;
    justify-content: space-between;
  }
}

#choco {
  color: rgb(189, 84, 9);
  padding-left: 7px;
}

.body {
  padding: 1rem;
  background: #112b53;
  color: #fff;
  & h3 {
    text-align: right;
    color: #fff;
    font-weight: medium;
  }
}
.items {
  display: flex;
  justify-content: space-around;
  & div {
    color: #fff;
    margin: 1rem;
  }
  & h4 {
    text-align: center;
    font-size: 1.4rem;
  }
  @media (--sm) {
    display: grid;
    & p {
      font-size: 1.2rem;
    }
    & h4 {
      text-align: center;
      font-size: 1.4rem;
    }
  }
  @media (--md) {
    display: flex;
    & p {
      font-size: 1.2rem;
    }
    & h4 {
      text-align: center;
      font-size: 1.4rem;
    }
  }
  @media (--lg) {
    display: flex;
    & p {
      font-size: 1.2rem;
    }
    & h4 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
  @media (--xl) {
    display: flex;
    & p {
      font-size: 1.2rem;
    }
    & h4 {
      text-align: center;
      font-size: 1.6rem;
    }
  }
}
</style>