<template>
  <PersonUse></PersonUse>

</template>

<script>
import { ref } from 'vue';
import PersonUse from './toRefs/PersonUse'
export default {
  name: 'App',
  components:{
    PersonUse
  },
  setup(){
    let sum = ref(0);
    //返回一个对象
    return {
      sum
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
  margin-top: 60px;
}
</style>