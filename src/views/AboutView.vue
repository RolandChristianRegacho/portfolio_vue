<script setup>
import AboutComponent from '@/components/AboutComponent.vue'
import $ from 'jquery'
import calculateSize from '@/additional_scripts/calculate-width'

$(() => {
  calculateSize()
})
</script>

<template>
  <main>
    <AboutComponent />
  </main>
</template>
