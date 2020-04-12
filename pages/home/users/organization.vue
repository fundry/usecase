<template>
  <div class="body">
    <div>
      <br />

      <p>
        Leverage upon
        <b>Usecases's console</b> to prepare and document consistent bits of information for your organization bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </p>
      <img src="../../../assets/svg/sample-console.svg" alt="sample console" />
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
  & div {
    text-align: center;
  }
  & p {
    font-family: sans-serif;
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
  }
  @media (--sm) {
    & p {
      font-size: 1.15rem;
      padding: 0.5rem 1rem;
    }
    & img {
      height: auto;
      width: 30rem;
    }
    & button {
      background: #361f94;
      border: 1px solid #0e2f5a;
      border-radius: 10px;
      color: #fff;
      box-shadow: 0px 7px 7px #0b33a2;
      margin: 0 1em;
      font-size: 1.2rem;
      padding: 0.6em 2.7em;
    }
  }
  @media (--md) {
    & p {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
    & img {
      height: auto;
      width: 35rem;
      animation: 2s appear;

      @keyframes appear {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
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
      font-size: 1.4rem;
      padding: 0.5rem 3rem;
    }
    & img {
      height: auto;
      width: 50rem;
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
      font-size: 1.5rem;
      padding: 0.5rem 7rem;
    }
    & img {
      height: auto;
      width: 65rem;
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
