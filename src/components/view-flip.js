// import _ from 'lodash'
import Vue from 'vue'

module.exports = Vue.component('view-flip', {
  template: `<div>
    <div id="flip-box">
      <div class="box">
        <p class="front">
          Flip to view
        </p>
        <p class="back">
          <img src="https://img.clipartfest.com/d15dcc8b50c876886bc435ac6a284634_battle-donald-j-trump-donald-trump-head-clipart_427-547.png"/>
        </p>
      </div>
    </div>
  </div>`
})
