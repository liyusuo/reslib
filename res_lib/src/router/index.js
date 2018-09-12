import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const _import = require('./_import_' + process.env.NODE_ENV)

import Layout from '../views/layout/Layout'
import LessonLayout from '../views/layout/LessonLayout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '',
      component: Layout,
      redirect: 'index',
      children: [{
        path: 'index',
        component: _import('index'),
        name: 'index',
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'news',
      children: [{
        path: 'news',
        component: _import('news'),
        name: 'news',
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'majors',
      children: [{
        path: 'majors',
        component: _import('majors'),
        name: 'majors',
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'lessons',
      children: [{
        path: 'lessons',
        component: _import('lessons'),
        name: 'lessons',
      }]
    },
    {
      path: '',
      component: Layout,
      redirect: 'resources',
      children: [{
        path: 'resources',
        component: _import('resources'),
        name: 'resources',
      }]
    },
    {
      path: '',
      component: LessonLayout,
      redirect: 'lessons/bbs',
      children: [{
        path: 'lessons/bbs',
        component: _import('lessons/bbs'),
        name: 'bbs',
      }]
    },
    {
      path: '',
      component: LessonLayout,
      redirect: 'lessons/exams',
      children: [{
        path: 'lessons/exams',
        component: _import('lessons/exams'),
        name: 'exams',
      }]
    },{
      path: '',
      component: LessonLayout,
      redirect: 'lessons/learn',
      children: [{
        path: 'lessons/learn',
        component: _import('lessons/learn'),
        name: 'learn',
      }]
    },{
      path: '',
      component: LessonLayout,
      redirect: 'lessons/tests',
      children: [{
        path: 'lessons/tests',
        component: _import('lessons/tests'),
        name: 'tests',
      }]
    }
  ]
})
