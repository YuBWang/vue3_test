// 或者 export default function
import {reactive,onMounted,onUnmounted} from 'vue'
function savePoint() {
  // 实现鼠标打点相关数据
    let point = reactive({
        x:0,
        y:0
       })

    function savePoint(event) {
      point.x = event.x;
      point.y = event.y;
    }
      // 实现鼠标打点相关钩子
    onMounted(()=>{
      window.addEventListener('click', savePoint)
    })

    onUnmounted(()=>{
      window.removeEventListener('click', savePoint);
    })
    return point;
}

export default savePoint