import Vue from 'vue'
import App from './app.vue'

import './styles/index.css'

let div = document.createElement('div')
document.body.appendChild(div)

let app = new Vue({
    render: (h) => h(App)
}).$mount(div)