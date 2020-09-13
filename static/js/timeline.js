var timelineComp = Vue.component('timeline', {
  mixins: [mixin],
  props: ["events"],
  data: function() {
    return {
      domid: 'timeline'
    }
  },
  template: `
  <div class="row">
    <div class="card-group shadow-lg p-3 mb-5 bg-white rounded">
      <card v-for="event in events"
          v-bind:title="event.title"
          v-bind:institute="event.institute"
          v-bind:text="event.start + ' - ' + event.end"
          v-bind:imgsrc="event.img"
          v-bind:link="event.link"
          v-bind:highlights="event.highlights"></card>

    </div>
  </div>
  `
})
