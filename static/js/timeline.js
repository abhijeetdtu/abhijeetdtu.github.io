var timelineComp = Vue.component('timeline', {
  mixins: [mixin],
  props: ["events"],
  data: function() {
    return {
      domid: 'timeline'
    }
  },
  methods:{
    eventgroups: function(){
      group_size = 3
      eventgroups = []
      g = []
      for(var i = 0 ; i < this.events.length ; i++){
        if((i % group_size == 0) & (i > 0)){
          eventgroups.push(g)
          g = []
        }
          g.push(this.events[i])
      }
      eventgroups.push(g)
      return eventgroups
    }
  },
  template: `
  <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="container">
          <div class="row">
              <card class="container" v-for="(event,index_2) in events" v-bind:key="index_2"
                  v-bind:title="event.title"
                  v-bind:institute="event.institute"
                  v-bind:text="event.start + ' - ' + event.end"
                  v-bind:imgsrc="event.img"
                  v-bind:link="event.link"
                  v-bind:highlights="event.highlights"></card>
          </div>
        </div>
     </div>
      <oes></oes>
  </div>
  `
})
