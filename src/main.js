import { createApp} from 'vue'
import App from './App.vue'

// 创建应用实例对象
createApp(App).mount('#app')

/*const app = createApp(App)
app.mount('#app')*/
// vue2 写法
 /**const vm = new Vue({
    render:h => h(App)
 })
 vm.$mount('#app')**/
