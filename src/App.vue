<template>
  <IphoneUI>
    <f7-app :params="f7params">
      <f7-view main url="/" />
    </f7-app>
  </IphoneUI>
</template>

<script setup>
import IphoneUI from './components/IphoneUI.vue'

const f7params = {
  name: 'My App',
  theme: 'auto',
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/about/',
      component: () => import('./pages/About.vue'),
    },
  ],
}
</script>
