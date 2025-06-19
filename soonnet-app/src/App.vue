<template>
  <f7-app>
    <f7-view main :routes="routes" url="/" />
  </f7-app>
</template>

<script>
import routes from './routes';

export default {
  name: 'App',
  data() {
    return {
      routes,
    };
  },
};
</script>
