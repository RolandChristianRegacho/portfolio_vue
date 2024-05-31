<script setup>
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import $ from 'jquery'
import calculateSize from '@/additional_scripts/calculate-width'

$(() => {
  calculateSize()
})
</script>

<template>
  <ProjectsComponent />
</template>
