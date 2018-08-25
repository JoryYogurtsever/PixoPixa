<template>
  <div id="app">
    <h1 class="pixo"> PixoPixa</h1>
    <h1 class="pixa"> Interactive Gifts and Ads</h1>
    <hr>
    <nav class="btn-basket">
      <router-link to="/"><button class="pixa btn">Home</button></router-link>
      <router-link to="Products"><button class="pixa btn">Products</button></router-link>
      <router-link to="AboutUs"><button class="pixa btn">About Us</button></router-link>
    </nav>
    <hr>
    <router-view></router-view>
    <footer>
      <router-link to="Privacy">
        <nav class="ftr">
        <a> Privacy Policy </a>
        </nav>
      </router-link>
    </footer>
  </div>
</template>

<script>
import pixoFooter from './components/PixoFooter';

export default {
  name: 'App',
  data() {
    return {
      Schmozge: false,
    };
  },
  components: {
    pixoFooter,
  },
};
</script>

<style>
  body {
    background-color: black;
    font-family: 'Quantico', sans-serif;
  }
  .pixo {
    font-family: 'Press Start 2P', cursive;
    font-weight: 200;
    font-size: 3em;
    color: lime;
  }
  .pixa {
    font-family: 'Press Start 2P', cursive;
    font-weight: 200;
    font-size: 2em;
    color: white;
  }
  .btn {
    background-color: black;
    width: 33%;
    border: none;
    color: white;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: azure;
  margin-top: 60px;
}
  .ftr {
    position: fixed;
    bottom: 0;
    text-align: center;
    height:2em;
    background-color: rgb(1,1,1);
    width: 100%;
    margin: 0;
  }
  p {
    padding: 0 15%;
  }
</style>
