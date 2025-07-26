<template>
<h2>当前数据为{{sum}}</h2>
<button @click="sum++">点我变换数据</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  watch:{
    // 简写
      // sum(newValue,oldValue) {
      //   console.log('sum值发生了改变',newValue, oldValue);
      // }
      sum:{
        immediate:true,
        // 深度监视
        deep:true,
        handler(newValue,oldValue) {
           console.log('sum值发生了改变',newValue, oldValue);

        }
      }


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