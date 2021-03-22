import {createWebHashHistory,createRouter} from 'vue-router'
const history  = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

export const router  = createRouter({
  history,
  routes:[
    {path:'/',component: Home},
    {path:'/doc',component: Doc,children:[
      {path:'switch',component: SwitchDemo},
      {path:'button',component: Button},
      {path:'dialog',component: Dialog},
      {path:'tabs',component: Tabs},
    ]}
  ]
})