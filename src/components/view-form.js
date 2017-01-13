// import _ from 'lodash'
import Vue from 'vue'

module.exports = Vue.component('view-form', {
  template: `<div>
    <form action="http://alade.zjnucomputing.com/code/formtesting.php" method="post">
      <fieldset class="control">
        <legend>Contact Information</legend>
        <p class="control has-icon">
          <input class="input" type="text" placeholder="Name" name="name">
          <span class="icon is-small">
              <i class="fa fa-user"></i>
          </span>
        </p>
        <p class="control has-icon">
          <input class="input" type="email" placeholder="Email" name="email">
          <span class="icon is-small">
              <i class="fa fa-envelope"></i>
          </span>
        </p>
        <p class="control has-icon">
          <input class="input" type="text" placeholder="Phone" name="phone">
          <span class="icon is-small">
              <i class="fa fa-phone"></i>
          </span>
        </p>
      </fieldset>
      <fieldset class="control">
        <legend>Area of Interests</legend>
        <div class="columns">
          <div class="column">
            <label>
              <input type="checkbox" name="frontend">
              Frontend
            </label>
          </div>
          <div class="column">
            <label>
              <input type="checkbox" name="backend">
              Backend
            </label>
          </div>
          <div class="column">
            <label>
              <input type="checkbox" name="backend">
              Full Stack
            </label>
          </div>
          <div class="column">
            <label>
              <input type="checkbox" value="mobile">
              Mobile
            </label>
          </div>
        </div>
      </fieldset>
      <p class="control">
        <div class="columns">
          <div class="column">
            <span class="select">
              <select name="position">
                <option>Part-Time</option>
                <option>Full-Time</option>
              </select>
            </span>
          </div>
          <div class="column">
            <p class="control">
              Are you willing to relocate?
              <label class="radio">
                <input type="radio" name="relocate">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="relocate">
                No
              </label>
            </p>
          </div>
        </div>
      </p>
      <p class="control">
        <button class="button is-primary" type="submit">
          <span class="icon">
            <i class="fa fa-hand-o-right"></i>
          </span>
          <span>Submit</span>
        </button>
        <button class="button is-warning" type="reset">
          <span class="icon">
            <i class="fa fa-refresh"></i>
          </span>
          <span>Reset</span>
        </button>
      </p>
    </form>
  </div>`
})
