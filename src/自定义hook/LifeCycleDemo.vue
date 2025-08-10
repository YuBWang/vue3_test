<template>
    <h1>当前值为: {{sum}}</h1>
    <button @click="sum++">点我值加1</button>
    <hr>
    <h1>当前的坐标为：x:{{point.x}},y:{{point.y}}</h1>

</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
    name:'LifeCycleDemo',
    setup(){
       var sum = ref(0);
       let point = usePoint();
       

        return{
            sum,point
        }

    }

}

</script>
