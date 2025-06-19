<template>
  <IphoneUI>
    <f7-app :params="f7params">
      <f7-views>
        <f7-view main url="/" />
      </f7-views>
    </f7-app>
  </IphoneUI>
</template>

<script setup>
import IphoneUI from './components/IphoneUI.vue';
import HomePage from './pages/Home.vue';

const f7params = {
  name: 'My App',
  theme: 'auto',
  routes: [
    { path: '/', component: HomePage },
  ],
};
</script>
