<template>
  <f7-app>
    <f7-view main>
      <f7-page>
        <f7-navbar title="Hello Framework7" />
        <f7-block strong>
          <p>This is Framework7 + Vue + Vite 🐱‍👓</p>
          <f7-button fill @click="hi">Click Me</f7-button>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<script setup>
function hi() {
  alert('Framework7 is working 🎉');
}
</script>
