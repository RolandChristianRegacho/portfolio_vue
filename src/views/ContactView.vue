<script setup>
import ContactComponent from '@/components/ContactComponent.vue'
import $ from 'jquery'
import calculateSize from '@/additional_scripts/calculate-width'

$(() => {
  calculateSize()
})
</script>

<template>
  <NewMessageNotifPage class="notification-popup" />
  <ContactComponent />
</template>
