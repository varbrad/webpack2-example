import _ from 'lodash';
import Vue from 'vue';

module.exports = Vue.component('view-home', {
  template: `<div>
    <h1>{{ message }}</h1>
    <input v-model="message">
  </div>`,
  data: function () {
    return {
      message: 'Hello'
    }
  }
});