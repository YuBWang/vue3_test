<template>
  <!--vue3的组件模版结构可以没有根标签-->
  <h1>我是app组件</h1>
  <h1>我叫{{ person.name }}, {{ person.age }}岁</h1>
  <h3>职位:{{ person.type }}</h3>
  <h3>薪水:{{ person.salary }}</h3>
  <h3>爱好:{{ person.hobbies }}</h3>
  <h4>测试的数据c:{{ person.a.b.c }}</h4>
  <button @click="changeInfo">修改人的信息</button>
  <br>
  <br>
  姓名：<input type="text" v-model="person.name">
  年龄：<input type="text" v-model="person.age">
  个人信息：<input type="text" v-model="person.fullmessage">
</template>

<script>
import { computed, reactive } from 'vue';
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name: 'py',
      age: 21,
      fullmessage:"",
      type: 'frontend developer',
      salary: '30',
      hobbies: ['抽烟', '喝酒', '烫头'],
      a:{
        b:{
          c: 666
        }
      }
    });


    function changeInfo(){
      person.name = '李四';
      person.age = 42;
      // job.value.type = 'xxx'
      person.type = 'UI developer';
      //测试reactive能否监测深层次变化
      person.a.b.c = 100;
      person.hobbies[0] = 'play tennis';
      // console.log(name, age); //不是响应式的
    }

      person.fullmessage = computed({
      get() {
        return person.name + "-" + person.age
      },
      set(value) {
        let messagearr = value.split("-");
        person.name = messagearr[0];
        person.age = messagearr[1];
      }
    })

    //返回一个对象
    return {
      person,
      changeInfo
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