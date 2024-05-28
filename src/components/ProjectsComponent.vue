<template>
  <div class="Project" id="Project">
    <div v-for="item in Projects" :key="item.project_name" class="card"></div>
  </div>
</template>

<script>
import { IoGameController, FaAddressCard } from '@kalimahapps/vue-icons'
export default {
  name: 'ProjectsComponent',
  data() {
    return {
      Projects: []
    }
  },
  mounted() {
    const project = [
      {
        project_name: 'Click Titans',
        project_icon: IoGameController,
        project_description:
          'A simple clicking game resembles tap titans made using HTML, Native Js, JQuery and PHP.'
      },
      {
        project_name: 'Grade Portal',
        project_icon: FaAddressCard,
        project_description:
          'A Grading Portal App for Elementary and High School in St. Mark’s College.'
      }
    ]

    this.Projects = project
  }
}
</script>

<style>
.card {
  float: left;
  width: 200px;
  height: 200px;
  background: rgba(250, 250, 250, 1);
}
</style>
