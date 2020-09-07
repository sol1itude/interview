<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h1>{{num | setNum}}</h1>
    <v-model v-model="txt"></v-model>
    <p>{{txt}}</p>
  </div>
</template>
<script>
import vModel from './components/Vmodel'
export default {
  components: {
    vModel
  },
  data(){
    return {
      num: 88,
      txt: 1111111
    }
  },
  filters: {
    setNum(){
      return 99
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
