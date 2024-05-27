import $ from 'jquery'

export default function calculateSize() {
  let value = $(document).height() - 60
  if ($('#main').height() < value) {
    $('#main').height(value)
    $('#main').attr('style', `height: ${value}px !important;`)
  }

  if ($(document).width() > 1200) {
    let document_width = $(document).width()

    let margin = document_width - 1200
    let margin_left = Math.round(margin / 2)

    if ($('#main').height() < value) {
      $('#main').attr('style', `margin-left: ${margin_left}px; height: ${value}px;`)
    } else if ($('#main').height() == value) {
      $('#main').attr('style', `margin-left: ${margin_left}px; height: ${value}px;`)
    } else {
      $('#main').attr('style', `margin-left: ${margin_left}px;`)
    }
  }

  $(window).on('resize', () => {
    if ($(document).width() > 1200) {
      let document_width = $(document).width()

      let margin = document_width - 1200
      let margin_left = Math.round(margin / 2)

      if ($('#main').height() < value) {
        $('#main').attr('style', `margin-left: ${margin_left}px; height: ${value}px;`)
      } else if ($('#main').height() == value) {
        $('#main').attr('style', `margin-left: ${margin_left}px; height: ${value}px;`)
      } else {
        $('#main').attr('style', `margin-left: ${margin_left}px;`)
      }
    } else {
      if ($('#main').height() < value) {
        $('#main').attr('style', `margin-left: 0px; height: ${value}px;`)
      } else if ($('#main').height() == value) {
        $('#main').attr('style', `margin-left: 0px; height: ${value}px;`)
      } else {
        $('#main').attr('style', `margin-left: 0px; `)
      }
    }
  })
}
