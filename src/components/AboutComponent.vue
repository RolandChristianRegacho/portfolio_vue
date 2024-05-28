<template>
  <div class="about" id="about">
    <div class="about-left">
      <p>
        An IT Graduate with exceptional strengths in handling stressful situations and has great
        critical problem solving ability. I also love developing small web applications to test my
        current skills in web development. I've already done a simple game that you can see in my
        portfolio.
      </p>
    </div>
    <div class="about-right">
      <h2>Skills</h2>
      <table>
        <tbody>
          <tr>
            <td><AkHtmlFill /></td>
            <td>HTML</td>
            <td><AkCssFill /></td>
            <td>CSS</td>
          </tr>
          <tr>
            <td><AkJavascriptFill /></td>
            <td>Javascript</td>
            <td><AkPhpFill style="font-size: 1.5em" /></td>
            <td>PHP</td>
          </tr>
          <tr>
            <td><AnOutlinedJava /></td>
            <td>Java</td>
            <td><AkPythonFill /></td>
            <td>Python</td>
          </tr>
          <tr>
            <td><BxCodeAlt /></td>
            <td>C#</td>
            <td><AkVueFill /></td>
            <td>Vue Js</td>
          </tr>
          <tr>
            <td><CoBrandKotlin /></td>
            <td>Kotlin</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {
  AkHtmlFill,
  AkCssFill,
  AkJavascriptFill,
  AkPhpFill,
  AnOutlinedJava,
  AkPythonFill,
  BxCodeAlt,
  AkVueFill,
  CoBrandKotlin
} from '@kalimahapps/vue-icons'

export default {
  name: 'AboutComponent',
  components: {
    AkHtmlFill,
    AkCssFill,
    AkJavascriptFill,
    AkPhpFill,
    AnOutlinedJava,
    AkPythonFill,
    BxCodeAlt,
    AkVueFill,
    CoBrandKotlin
  }
}
</script>

<style scoped>
.about {
  width: 100%;
  height: 600px;
  padding-top: 200px;
}

p {
  font-size: 20px;
}

.about-left {
  float: left;
  width: 50%;
  padding-right: 50px;
  padding-left: 50px;
}

.about-right {
  float: left;
  width: 50%;
}

h2 {
  margin-left: 50px;
  font-size: 50px;
}

table {
  width: 500px;
  padding-left: 50px;
  font-size: 25px;
}

@media only screen and (orientation: portrait) {
  .about {
    padding-top: 50px;
  }
  .about-left {
    width: 100%;
    margin-bottom: 100px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .about-right {
    width: 100%;
  }
}
</style>
