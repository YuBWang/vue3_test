<template>
<h2>当前数据为{{sum}}</h2>
<button @click="sum++">点我变换数据</button>
<button @click="msg=msg+'~'">点我变换提示</button>
<br>
<br>
<br>
<input type="text" v-model="msg">
<br>
<br>
<br>
<h3>姓名：{{person.name}}</h3>
<h3>年龄：{{person.age}}</h3>
<h3>班级：{{person.school.cl}}</h3>
<button @click="person.age++">点我修改年龄</button>
<button @click="person.name=person.name+'~'">点我修改名称</button>
<button @click="person.school.cl=person.school.cl+'班'">点我修改班级</button>
</template>

<script>
import { reactive, ref,watch, watchEffect } from 'vue';
export default {
  name: 'App',
  // vue2写法
  // watch:{
  //   // 简写
  //     // sum(newValue,oldValue) {
  //     //   console.log('sum值发生了改变',newValue, oldValue);
  //     // }
  //     sum:{
  //       immediate:true,
  //       // 深度监视
  //       deep:true,
  //       handler(newValue,oldValue) {
  //          console.log('sum值发生了改变',newValue, oldValue);

  //       }
  //     }


  //   },
  setup(){
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name:"张三",
      age:18,
      school:{
        cl:"五班"
      }
    })

    // 监视ref所定义的多个数据
    // watch([sum,msg],(newValue,oldValue)=>{
    //   console.log('sum或msg值发生了改变',newValue, oldValue);

    // },{immediate:true})

    // 监听reactive响应式数据
    // watch(person,(newValue,oldValue)=>{
    //   console.log("person发生了改变",newValue,oldValue);

    // })
    //监视reactive响应数据中的某个值
    // watch(()=>person.name,(newValue,oldValue) =>{
    //   console.log("person的name值变化了",newValue,oldValue);
    // })

       //监视reactive响应数据中的多个值
    // watch([()=>person.name,()=>person.age],(newValue,oldValue) =>{
    //   console.log("person的name或者age值变化了",newValue,oldValue);
    // })

           //特殊情况
    watch([()=>person.school],(newValue,oldValue) =>{
      console.log("person的school值变化了",newValue,oldValue);
    },{deep:true})

    watchEffect(()=>{
      const a = sum.value;
      const b = person.age;
      console.log("watcheffect 检测到了值的改变",a,b);
    })

    //返回一个对象
    return {
      sum,msg,person
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