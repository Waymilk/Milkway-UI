/*
 * @Descripttion:
 * @Author: Milkway
 * @Date: 2021-03-23 16:13:22
 * @LastEditors: Milkway
 * @LastEditTime: 2021-04-07 13:59:45
 */
import {createWebHashHistory,createRouter} from 'vue-router'
const history  = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Install from './views/Install.vue'
import GetStarted from './views/GetStarted.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
const md = filname => h(Markdown,{path:`../markdown/${filname}.md`,key:filname})

export const router  = createRouter({
  history,
  routes:[
    {path:'/',component: Home},
    {path:'/doc',component: Doc,children:[
      {path:'intro',component: md('intro')},
      {path:'install',component: md('install')},
      {path:'get-started',component: md('get-started')},
      {path:'switch',component: SwitchDemo},
      {path:'button',component: ButtonDemo},
      {path:'dialog',component: DialogDemo},
      {path:'tabs',component: TabsDemo},
    ]}
  ]
})