import Vue from 'vue'

module.exports = Vue.component('view-maths', {
  template: `<div class="maths">
    <h1 class="header">Maths</h1>
    <p><strong>Correct:</strong> {{ totalCorrect }}</p>
    <p><strong>Wrong:</strong> {{ totalWrong }}</p>
    <transition name="burstIn">
      <div v-show="!submit">
        <p class="question">{{ numberA }} x {{ numberB }} = ?</p>
        <p class="control has-icon">
          <input class="input" type="number" placeholder="Answer" v-model="entered" @keypress.enter="submitAnswer">
          <span class="icon is-small">
              <i class="fa fa-arrow-right"></i>
          </span>
        </p>
        <p class="control">
          <button class="button is-primary" @click="submitAnswer">
            <span class="icon">
              <i class="fa fa-hand-o-right"></i>
            </span>
            <span>Submit</span>
          </button>
        </p>
      </div>
    </transition>
    <transition name="burstIn">
      <div v-show="submit">
        <div v-show="correct" class="correct">
          <h1>{{correctMessage()}}</h1>
        </div>
        <div v-show="!correct" class="wrong">
          <h1>{{wrongMessage()}}</h1>
        </div>
        <p class="control">
          <button class="button is-primary" @click="generateNew">
            <span class="icon">
              <i class="fa fa-refresh"></i>
            </span>
            <span>Retry</span>
          </button>
        </p>
      </div>
    </transition>
  </div>`,
  data: function () {
    return {
      numberA: null,
      numberB: null,
      answer: null,
      entered: '',
      submit: false,
      correct: null,
      totalCorrect: 0,
      totalWrong: 0
    }
  },
  methods: {
    generateNew: function () {
      this.correct = null
      this.submit = false
      this.entered = ''
      this.numberA = Math.ceil(Math.random() * 20)
      this.numberB = Math.ceil(Math.random() * 20)
      this.answer = this.numberA * this.numberB
    },
    submitAnswer: function () {
      if (this.entered === '') return
      this.submit = true
      if (this.entered === this.answer) {
        this.correct = true
        this.totalCorrect++
      } else {
        this.correct = false
        this.totalWrong++
      }
    },
    correctMessage: function () {
      return ['Correct', 'Excellent', 'Super'][Math.floor(Math.random()*3)]
    },
    wrongMessage: function () {
      return ['Wrong', 'Try Again', 'Incorrect'][Math.floor(Math.random()*3)]
    }
  },
  mounted: function () {
    this.generateNew()
  }
})
