<template>
  <div class="Project" id="Project">
    <div v-for="item in Projects" :key="item.project_name" class="card">
      <div class="card-icon">
        <component v-bind:is="item.project_icon"></component>
      </div>
      <div class="card-name">
        <h2>{{ item.project_name }}</h2>
      </div>
      <div class="card-description">
        <p>{{ item.project_description }}</p>
      </div>
      <div class="card-button">
        <button @click="visitLink(item.project_link)">Visit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  IoGameController,
  FaAddressCard,
  FaReceipt,
  AnFilledNotification,
  FaUsers
} from '@kalimahapps/vue-icons'
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
        project_link: 'https://github.com/RolandChristianRegacho/ClickTitans',
        project_description:
          'A simple clicking game resembles tap titans made using HTML, Native Js, JQuery and PHP.'
      },
      {
        project_name: 'Grade Portal',
        project_icon: FaAddressCard,
        project_link: 'https://github.com/RolandChristianRegacho/ClickTitans',
        project_description:
          'A Grading Portal App for Elementary and High School in St. Mark’s College made using HTML, Native Js, JQuery and PHP.'
      },
      {
        project_name: 'Onepos',
        project_icon: FaReceipt,
        project_link: 'https://1pos.1teqproviders.com.ph/',
        project_description: 'A POS app made using HTML, Native Js, JQuery and PHP.'
      },
      {
        project_name: 'Notification',
        project_icon: AnFilledNotification,
        project_link: 'https://github.com/RolandChristianRegacho/notification-too',
        project_description: 'A simple toast notification made from jquery'
      },
      {
        project_name: 'Social Crowd',
        project_icon: FaUsers,
        project_link: 'https://github.com/RolandChristianRegacho/social_media_using_vue',
        project_description: 'A Social media app made using HTML, JQuery, Vue.js and PHP.'
      }
    ]

    this.Projects = project
  },
  methods: {
    visitLink(form) {
      window.open(form)
    }
  }
}
</script>

<style>
.Project {
  width: 100%;
  height: 100%;
}

.card {
  float: left;
  width: 330px;
  height: 300px;
  background: rgba(250, 250, 250, 1);
  margin-left: 50px;
  margin-top: 50px;
  color: #008cba;
}

.card:nth-of-type(2n + 2) {
  color: #d85e52;
}

.card-icon {
  float: left;
  width: 100%;
  height: 100px;
}

.card-icon:first-child {
  text-align: center;
  font-size: 80px;
}

.card-name {
  float: left;
  width: 100%;
  height: 60px;
  text-align: center;
  padding: 10px;
  font-size: 20px;
}

.card-description {
  float: left;
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 10px;
  font-size: 15px;
  padding-left: 20px;
  padding-right: 20px;
}

.card-button {
  float: left;
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 15px;
}

.card-button button {
  width: 80px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition-duration: 0.4s;
  background: #008cba;
  color: white;
  border-radius: 5px;
}

.card-button button:hover {
  background: rgb(14, 84, 177);
  box-shadow: 2px 0px 3px 2px rgba(20, 20, 20, 1);
}
</style>
