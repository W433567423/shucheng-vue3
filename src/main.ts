import { createApp } from 'vue'
import { ImgUtil } from './utils/imgUtils'
import './style.css'
import App from './App.vue'

ImgUtil.storageImgList()
createApp(App).mount('#app')
