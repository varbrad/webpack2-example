import _ from 'lodash';
import Vue from 'vue';

module.exports = Vue.component('view-video', {
  template: `<div>
    <video width="320" height="240" controls>
        <source src="http://www.w3schools.com/html/movie.mp4" type="video/mp4">
        <source src="http://www.w3schools.com/html/movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
    </video>
  </div>`,
  data: function () {
    return {
      message: 'Hello'
    }
  }
});