const Vue = require('vue')

module.exports = Vue.component('view-calc', {
  template: require('./templates/view-calc.pug')(),
  data: function () {
    return {
      v1: 0,
      v2: 0,
      sign: '+'
    }
  },
  computed: {
    result: function () {
      switch (this.sign) {
        case '+': return (this.v1 + this.v2).toLocaleString()
        case '-': return (this.v1 - this.v2).toLocaleString()
        case 'x': return (this.v1 * this.v2).toLocaleString()
        case '/': return (this.v1 / this.v2).toLocaleString()
      }
    }
  },
  methods: {
    changeSign: function () {
      switch (this.sign) {
        case '+': this.sign = '-'; break
        case '-': this.sign = 'x'; break
        case 'x': this.sign = '/'; break
        case '/': this.sign = '+'; break
      }
    }
  }
})
