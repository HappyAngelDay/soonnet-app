<template>
  <f7-app :params="{ theme: 'auto', name: 'My App' }">
    <f7-view main url="/" />
  </f7-app>
</template>

<script>
export default {
  name: 'App',
  framework7: {
    routes: [
      { path: '/', component: () => import('./pages/Home.vue') },
      { path: '/about/', component: () => import('./pages/About.vue') },
    ],
  },
};
</script>

<style>
.phone-frame {
  width: 375px;
  height: 667px;
  border: 16px solid #000;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin: auto;
  overflow: hidden;
  background: #000;
}

.content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>