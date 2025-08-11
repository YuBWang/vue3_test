<template>
  <LifeCycleDemo></LifeCycleDemo>

</template>

<script>
import { ref } from 'vue';
import LifeCycleDemo from './自定义hook/LifeCycleDemo.vue';
import pt from './hooks/爱心';
export default {
  name: 'App',
  components:{
    LifeCycleDemo
  },
  setup(){
    let sum = ref(0);
    pt();
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