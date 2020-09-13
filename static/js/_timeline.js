Vue.component('timeline', {
  mixins: [mixin],
  data: function() {
    return {
      domid: 'timeline',
      events: [{
        id: 'Task 1',
        name: 'Bachelors in Computer Engineering @ DCE',
        start: '2011-08-01',
        end: '2015-05-01',
        progress: 100,
      }, {
        id: 'Task 1',
        name: 'Software Engineer @ UHG/OPTUM',
        start: '2015-07-01',
        end: '2019-07-01',
        progress: 100,
      }, {
        id: 'Task 1',
        name: 'Masters in Data Science @ UNC Charlotte',
        start: '2019-08-01',
        end: '2021-07-01',
        progress: 60,
      }]
    }
  },
  template: `
  <div class="row">
    <div class="col">
      <div v-bind:id="domid">
      </div>

    </div>
  </div>
  `
})
