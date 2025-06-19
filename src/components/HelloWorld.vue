<template>
  <f7-page>
    <f7-navbar title="Hello Framework7" />
    <f7-button @click="sayHi">Click Me</f7-button>
  </f7-page>
</template>

<script setup>
function sayHi() {
  alert('Framework7 is working!')
}
</script>
