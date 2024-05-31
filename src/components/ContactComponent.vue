<template>
  <div class="Contact" id="Contact">
    <h1>Contact Info</h1>
    <table>
      <tbody>
        <tr>
          <td><AkDiscordFill /></td>
          <td id="contact-discord">nase1102</td>
          <td><button @click="copyElement('contact-discord')">Copy</button></td>
        </tr>
        <tr>
          <td><AkFacebookFill /></td>
          <td id="contact-facebook">Roland Christian Too Regacho</td>
          <td><button @click="goTo('facebook')">Visit</button></td>
        </tr>
        <tr>
          <td><AkGoogleFill /></td>
          <td id="contact-gmail">regacho800@gmail.com</td>
          <td><button @click="copyElement('contact-gmail')">Copy</button></td>
        </tr>
        <tr>
          <td><BsSkype /></td>
          <td id="contact-skype">live:.cid.8691244394ae269b</td>
          <td><button @click="copyElement('contact-skype')">Copy</button></td>
        </tr>
        <tr>
          <td><BsTelephoneFill /></td>
          <td id="contact-number">+63 9215382233</td>
          <td><button @click="copyElement('contact-number')">Copy</button></td>
        </tr>
      </tbody>
    </table>
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
import $ from 'jquery'

export default {
  name: 'ContactComponent',
  components: {
    AkDiscordFill,
    AkFacebookFill,
    AkGoogleFill,
    BsSkype,
    BsTelephoneFill
  },
  methods: {
    copyElement(form) {
      if (copyToClipboard(document.getElementById(form))) {
        console.log('copied')
        $('#msgNotif').html('Copied!')
        $.when($('#msgNotif').fadeIn(500)).done(() => {
          setTimeout(() => {
            $('#msgNotif').fadeOut(500)
          }, 3000)
        })
      } else {
        console.log('Copy failed')
      }
    },
    goTo(form) {
      if (form == 'facebook') {
        window.open('https://www.facebook.com/rolandchristiantoo.regacho/')
      }
    }
  }
}
//copy to clipboard function https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard/22581382#22581382
function copyToClipboard(elem) {
  // create hidden text element, if it doesn't already exist
  var targetId = '_hiddenCopyText_'
  console.log(elem)
  var isInput = elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA'
  var origSelectionStart, origSelectionEnd
  if (isInput) {
    // can just use the original source element for the selection and copy
    target = elem
    origSelectionStart = elem.selectionStart
    origSelectionEnd = elem.selectionEnd
  } else {
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId)
    if (!target) {
      var target = document.createElement('textarea')
      target.style.position = 'absolute'
      target.style.left = '-9999px'
      target.style.top = '0'
      target.id = targetId
      document.body.appendChild(target)
    }
    target.textContent = elem.outerText
  }
  // select the content
  var currentFocus = document.activeElement
  target.focus()
  target.setSelectionRange(0, target.value.length)

  // copy the selection
  var succeed
  try {
    succeed = document.execCommand('copy')
  } catch (e) {
    succeed = false
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === 'function') {
    currentFocus.focus()
  }

  if (isInput) {
    // restore prior selection
    elem.setSelectionRange(origSelectionStart, origSelectionEnd)
  } else {
    // clear temporary content
    target.textContent = ''
  }
  return succeed
}
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
}

table {
  text-align: left;
  width: 60%;
  margin: auto;
  font-size: 30px;
}

td {
  padding: 10px;
}

table button {
  width: 80px;
  height: 40px;
  border: none;
  cursor: pointer;
  transition-duration: 0.4s;
  background: #008cba;
  color: white;
  border-radius: 5px;
  font-size: 20px;
}

table button:hover {
  background: rgb(14, 84, 177);
  box-shadow: 2px 0px 3px 2px rgba(20, 20, 20, 1);
}
</style>
