<template>
  <div class="navigation" id="navigation">
    <button @click="scrollTo('home')">Home</button>
    <button @click="scrollTo('about')">About</button>
    <button>Projects</button>
    <button>Contact</button>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent',
  components: {},
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
  background: rgb(14, 44, 157);
  font-size: 22px;
  box-shadow: 3px 0px 5px 3px rgba(20, 20, 20, 1);
  transition-duration: 1s;
}

.navigation {
  display: flex;
  justify-content: center;
  background: rgb(14, 84, 177);
  height: 60px;
}
</style>
