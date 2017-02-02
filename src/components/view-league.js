// import _ from 'lodash'
import Vue from 'vue'

module.exports = Vue.component('view-league', {
  template: `<div>
    <div id="league-table">
      <div class="row header">
        <p>Pos</p>
        <p class="full">Team</p>
        <p>P</p>
        <p>GD</p>
        <p>Pts</p>
      </div>
      <div class="row" v-for="(team, i) in sortedLeague()">
        <p>{{ i + 1 }}.</p>
        <p class="full">{{ team.name }}</p>
        <p>{{ team.p }}</p>
        <p>{{ team.gd }}</p>
        <p>{{ team.pts }}</p>
      </div>
    </div>
  </div>`,
  data: function () {
    return {
      teams: [
        {name: 'Arsenal', p: 23, gd: 26, pts: 47},
        {name: 'Chelsea', p: 23, gd: 32, pts: 56},
        {name: 'Liverpool', p: 23, gd: 24, pts: 47},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Man City', p: 22, gd: 12, pts: 43},
        {name: 'Tottenham', p: 23, gd: 29, pts: 47}
      ]
    }
  },
  methods: {
    sortedLeague: function () {
      return this.teams.sort((a, b) => {
        if (a.pts > b.pts) return -1
        if (a.pts < b.pts) return 1
        if (a.gd > b.gd) return -1
        return 1
      })
    }
  }
})
