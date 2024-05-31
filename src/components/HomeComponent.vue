<template>
  <div class="home" id="home">
    <h3>Hi!</h3>
    <h1>I'm Roland</h1>
    <h2>Web Developer</h2>
    <button onclick="goTo('discord');"><AkDiscordFill /></button>
    <button onclick="goTo('facebook');"><AkFacebookFill /></button>
    <button onclick="goTo('contact');"><AkGoogleFill /></button>
    <button onclick="goTo('contact');"><BsSkype /></button>
    <button onclick="goTo('contact');"><BsTelephoneFill /></button>
  </div>
</template>

<script>
import {
  AkDiscordFill,
  AkFacebookFill,
  AkGoogleFill,
  BsSkype,
  BsTelephoneFill
} from '@kalimahapps/vue-icons'

export default {
  name: 'HomeComponent',
  components: {
    AkDiscordFill,
    AkFacebookFill,
    AkGoogleFill,
    BsSkype,
    BsTelephoneFill
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 600px;
  font-size: 50px;
  padding-left: 100px;
}

button {
  font-size: 40px;
  background: inherit;
  border: none;
  cursor: pointer;
  color: rgba(250, 250, 250, 1);
  width: 150px;
  height: 100px;
  transition-duration: 0.4s;
}

button:hover {
  background: rgb(14, 44, 157);
  border-radius: 5px;
  box-shadow: 3px 0px 5px 3px rgba(20, 20, 20, 1);
}

h3 {
  margin-top: 200px;
}

@media only screen and (orientation: portrait) {
  .home {
    width: 100%;
    height: 600px;
    font-size: 30px;
    padding: 50px;
  }

  button {
    font-size: 20px;
    width: 75px;
    height: 75px;
  }
}
</style>
