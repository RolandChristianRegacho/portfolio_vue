<script setup>
import ContactComponent from '@/components/ContactComponent.vue'
import $ from 'jquery'
import calculateSize from '@/additional_scripts/calculate-width'

$(() => {
  calculateSize()
})
</script>

<template>
  <ContactComponent />
</template>
