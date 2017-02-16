const Vue = require('vue')

module.exports = Vue.component('view-editor', {
  template: require('./templates/view-editor.pug')(),
  data: function () {
    return {
      message: 'Hello',
      element: ''
    }
  },
  methods: {
    highlight: function () {
      let a = document.querySelectorAll(this.element)
      a.forEach(e => e.classList.toggle('do-highlight'))
    },
    remove: function () {
      let a = document.querySelectorAll(this.element)
      a.forEach(e => e.remove())
    }
  }
})
