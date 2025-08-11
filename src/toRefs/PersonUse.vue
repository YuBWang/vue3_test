<template>

<br>
<h3>姓名：{{person.name}}</h3>
<h3>年龄：{{person.age}}</h3>
<h3>班级：{{person.school.cl}}</h3>
<button @click="person.age++">点我修改年龄</button>
<button @click="person.name=person.name+'~'">点我修改名称</button>
<button @click="person.school.cl=person.school.cl+'班'">点我修改班级</button>
</template>

<script>
import { reactive ,toRef} from 'vue';
export default {
  name: 'PersonUse',
  setup(){
    let person = reactive({
      name:"张三",
      age:18,
      school:{
        cl:"五班"
      }
    })

    //返回一个对象
    return {
      name:toRef(person,'name'),
      age:toRef(person,'age'),
      cl:toRef(person.school,'cl')
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