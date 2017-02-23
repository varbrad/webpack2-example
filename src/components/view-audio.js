// import _ from 'lodash'
import Vue from 'vue'

module.exports = Vue.component('view-audio', {
  template: `<div>
    <div class="audio-player">
      <audio controls ref="audio">
        <source src="http://www.w3schools.com/html/movie.ogg" type="video/ogg">
        Audio controls not supported.
      </audio>
      <p>Current Time: {{ Math.floor(currentTime) }}</p>
      <p>Duration: {{ Math.floor(duration) }}</p>
      <input v-model="speed" @keypress.enter="setSpeed">
    </div>
    <canvas width="500" height="500" ref="canvas"></canvas>
  </div>`,
  mounted: function () {
    this.$refs.audio.addEventListener('canplaythrough', this.loaded)
    this.interval = window.setInterval(this.update, 33)
    this.gc = this.$refs.canvas.getContext('2d')
  },
  data: function () {
    return {
      currentTime: null,
      speed: null,
      duration: null,
      percent: 0
    }
  },
  methods: {
    update: function () {
      this.currentTime = this.$refs.audio.currentTime
      this.percent = this.currentTime / this.duration

      this.gc.clearRect(0, 0, 500, 500)
      this.gc.fillStyle = 'red'
      this.gc.moveTo(250, 250)
      this.gc.arc(250, 250, 200, 0, this.percent * 2 * Math.PI)
      this.gc.lineTo(250, 250)
      this.gc.fill()
      this.gc.fillStyle = '#333333'
      this.gc.beginPath()
      this.gc.arc(250, 250, 100, 0, 2 * Math.PI)
      this.gc.fill()
    },
    loaded: function (e) {
      this.speed = this.$refs.audio.playbackRate
      this.duration = this.$refs.audio.duration
    },
    setSpeed: function () {
      this.$refs.audio.playbackRate = this.speed
    }
  }
})
