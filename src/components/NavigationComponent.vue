<template>
  <div class="navigation" id="navigation">
    <button @click="scrollTo('home')">Home</button>
    <button @click="scrollTo('about')">About</button>
    <button @click="scrollTo('projects')">Projects</button>
    <button @click="scrollTo('contact')">Contact</button>
  </div>
  <div class="navigation_mobile" id="navigation">
    <button class="icon" @click="scrollTo('home')"><AnFilledHome /></button>
    <button @click="scrollTo('about')"><AnFilledInfoCircle /></button>
    <button @click="scrollTo('projects')"><AnFilledFolder /></button>
    <button @click="scrollTo('contact')"><AnFilledContacts /></button>
  </div>
</template>

<script>
import {
  AnFilledHome,
  AnFilledInfoCircle,
  AnFilledFolder,
  AnFilledContacts
} from '@kalimahapps/vue-icons'

export default {
  name: 'NavigationComponent',
  components: {
    AnFilledHome,
    AnFilledInfoCircle,
    AnFilledFolder,
    AnFilledContacts
  },
  methods: {
    scrollTo(form) {
      this.$router.push({ name: form })
    }
  }
}
</script>

<style scoped>
button {
  padding: 10px;
  font-size: 18px;
  background: inherit;
  border: none;
  cursor: pointer;
  color: rgba(250, 250, 250, 1);
  height: 60px;
  width: 100px;
  margin-left: 10px;
}

button:hover {
  background: rgb(14, 84, 177);
  font-size: 22px;
  box-shadow: 3px 0px 5px 3px rgba(20, 20, 20, 1);
  transition-duration: 1s;
}

.navigation {
  display: flex;
  justify-content: center;
  background: #008cba;
  height: 60px;
}

.navigation_mobile {
  display: none;
}

.icon {
  font-size: 30px;
}

@media only screen and (orientation: portrait) {
  .navigation {
    display: none;
  }

  .navigation_mobile {
    display: flex;
    justify-content: center;
    background: rgb(14, 84, 177);
    height: 60px;
  }
}
</style>
