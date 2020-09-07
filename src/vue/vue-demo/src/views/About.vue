<template>
  <div class="about">
    {{num}}
  </div>
</template>
<script>
import myMixin from '../mixin'
import Bus from '../bus'
export default {
  mixins: [myMixin],
  mounted() {
    this.fn1();
    Bus.$on('getTarget', txt => {
      console.log('111'+txt);
    })
  },

  methods: {
    hello(){
      console.log('hello about')
    }
  },
}
</script>
