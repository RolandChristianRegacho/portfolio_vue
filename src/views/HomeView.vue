<script setup>
import HomeComponent from '@/components/HomeComponent.vue'
import $ from 'jquery'
import calculateSize from '@/additional_scripts/calculate-width'

$(() => {
  calculateSize()
})
</script>

<template>
  <main>
    <HomeComponent />
  </main>
</template>
