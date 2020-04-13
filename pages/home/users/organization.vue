<template>
  <div class="body">
    <br />

    <p>
      Leverage upon
      <b>Usecases's console</b> to prepare and document consistent bits of information for your organization bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
    </p>
    <br />
    <h2>
      Try Usecases using the guest mode.
      <br />No Authentication required !
    </h2>
    <br />
    <div>
      <img src="../../../assets/svg/sample-console.svg" alt="sample console" />
      <br />
      <br />

      <button>
        <div class="flex">
          Try A Quick Demo
          <div id="icon-ctn">
            <BIconDisplay id="icon" />
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { BIconDisplay } from 'bootstrap-vue'

export default {
  name: 'Organizations',
  components: { BIconDisplay }
}
</script>

<style scoped lang="postcss" >
#icon {
  font-size: 1.9rem;
  color: #fff;
}
.flex {
  display: flex;
  & div {
    padding-left: 10px;
  }
}

.body {
  padding: 1rem;
  & h2 {
    font-weight: lighter;
    color: #361f94;
    font-size: 2.3rem;
    padding-left: 35px;
  }
  & div {
    text-align: center;
  }
  & p {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.5rem 1rem;
    color: #1d3c6a;
  }
  & button {
    background: #361f94;
    border: 1px solid #0e2f5a;
    border-radius: 7px;
    color: #fff;
    box-shadow: 0px 7px 7px #0b33a2;
    margin: 0 1em;
    padding: 0.7em 5em;
    outline: none;
    font-size: 1.2rem;
  }
  & img {
    height: auto;
    width: 30rem;
    cursor: pointer;
    @keyframes appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media (--sm) {
    & p {
      font-size: 1.15rem;
      padding: 0.5rem 1rem;
    }
    & img {
      height: auto;
      width: 22rem;
    }
    & h2 {
      font-size: 1.5rem;
      padding-left: 10px;
    }
    & button {
      background: #361f94;
      border: 1px solid #0e2f5a;
      border-radius: 10px;
      color: #fff;
      box-shadow: 0px 6px 6px #0b33a2;
      margin: 0 1em;
      font-size: 1rem;
      padding: 0.6em 1em;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
    }
    & img {
      height: auto;
      width: 35rem;
      animation: 2s appear;
    }
    & h2 {
      font-size: 2rem;
      padding-left: 35px;
    }
    & button {
      background: #361f94;
      border: 1px solid #0e2f5a;
      border-radius: 7px;
      color: #fff;
      box-shadow: 0px 7px 7px #0b33a2;
      margin: 0 1em;
      font-size: 1.2rem;
      padding: 0.7em 3em;
    }
  }
  @media (--lg) {
    & p {
      font-size: 1.5rem;
      padding: 0.5rem 3rem;
    }
    & img {
      height: auto;
      width: 50rem;
    }
    & h2 {
      font-size: 2.4rem;
      padding-left: 35px;
    }
    & button {
      background: #361f94;
      border: 1px solid #0e2f5a;
      border-radius: 7px;
      color: #fff;
      box-shadow: 0px 7px 7px #0b33a2;
      margin: 0 1em;
      padding: 0.7em 3em;
      font-size: 1.1rem;
    }
  }
  @media (--xl) {
    & p {
      font-size: 1.7rem;
      padding: 0.5rem 10rem;
    }
    & img {
      height: auto;
      width: 65rem;
    }
    & h2 {
      font-size: 3rem;
      padding-left: 35px;
    }
    & button {
      background: #361f94;
      border: 1px solid #0e2f5a;
      border-radius: 7px;
      color: #fff;
      box-shadow: 0px 7px 7px #0b33a2;
      margin: 0 1em;
      font-size: 1.1rem;
      padding: 0.7em 3em;
    }
  }
}
</style>
