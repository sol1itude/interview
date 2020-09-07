<template>
  <div class="home">
    <h1>{{num}}</h1>
    <button @click="num++">+</button>


    <button @click="doClick()">eventbus</button>
  </div>
</template>

<script>
// @ is an alias to /src
import myMixin from '../mixin'
import Bus from '../bus'
export default {
  name: 'Home',
  mixins: [myMixin],
  mounted() {
    this.fn1()
  },
  methods: {
    hello(){
      console.log('hello home')
    },
    fn1(){
      console.log('home fn1')
    },
    doClick(){
      Bus.$emit('getTarget', 'eventbus传值')
    }
  },
}
</script>
