<script setup>
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<template>
  <header>
    <NavigationComponent />
  </header>

  <main id="main">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  margin-left: auto;
}

main {
  width: 100%;
  margin-left: 0;
}
</style>
