// import _ from 'lodash'
import Vue from 'vue'

module.exports = Vue.component('view-video', {
  template: `<div>
    <div class="video-player">
      <video width="640" height="480" ref="video">
          <source src="http://www.w3schools.com/html/movie.mp4" type="video/mp4">
          <source src="http://www.w3schools.com/html/movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
      </video>
      <div class="controls">
        <div class="center" @click="playVideo">
          <i class="fa fa-fw fa-3x playback" v-bind:class="[playing ? 'fa-pause-circle' : 'fa-play-circle']"></i>
        </div>
        <div class="track">
          <i class="fa fa-fw playback-small" @click="playVideo" v-bind:class="[playing ? 'fa-pause' : 'fa-play']"></i>
          <span class="current-time">{{ formatTime(currentTime) }}</span>
          <input class="range" type="range" ref="range" v-model="currentPercent" min="0" max="1000" @mousedown="pauseVideo">
          <span class="duration">{{ formatTime(duration) }}</span>
        </div>
      </div>
    </div>
  </div>`,
  mounted: function () {
    this.$refs.video.addEventListener('ended', this.ended)
    this.$refs.video.addEventListener('canplaythrough', this.loaded)
    // this.$refs.video.addEventListener('timeupdate', this.updated)
    this.interval = window.setInterval(this.updated, 33)
    this.$refs.range.addEventListener('change', this.change)
  },
  data: function () {
    return {
      playing: false,
      currentTime: null,
      duration: null,
      currentPercent: null,
      interval: null
    }
  },
  beforeDestroy: function () {
    window.clearInterval(this.interval)
  },
  methods: {
    pauseVideo: function () {
      this.playing = false
      this.$refs.video.pause()
    },
    playVideo: function () {
      this.playing = !this.playing
      if (this.playing) this.$refs.video.play()
      else this.$refs.video.pause()
    },
    loaded: function (e) {
      this.currentTime = 0
      this.currentPercent = 0
      this.duration = this.$refs.video.duration
    },
    updated: function (e) {
      if (!this.playing) return
      this.currentTime = this.$refs.video.currentTime
      this.currentPercent = Math.round(this.currentTime * 1000 / this.duration)
    },
    ended: function (e) {
      this.playing = false
    },
    change: function (e) {
      this.currentTime = (e.target._value / 1000) * this.duration
      this.$refs.video.currentTime = this.currentTime
      this.playVideo()
    },
    formatTime: function (t) {
      let secs = Math.floor(t)
      let hours = Math.floor(secs / 3600)
      let mins = Math.floor((secs - (hours * 3600)) / 60)
      secs = secs - (hours * 3600) - (mins * 60)
      
      let str = ''
      if (hours > 0) {
        str += hours + ':'
      }
      if (secs < 10) secs = '0' + secs
      return str + mins + ':' + secs
    }
  }
})
