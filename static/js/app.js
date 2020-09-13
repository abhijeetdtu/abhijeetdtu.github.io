
var router = new VueRouter({
  routes : [
    {path : "/timeline" , component : timelineComp , props: { events : events}},
    { path: '*', redirect: '/timeline'},
    {path : "/projects" , component : timelineComp , props: { events : projects}},
  ]
})


var app = new Vue({
  el: '#app',
  router : router,
  data: {
    message: 'Hello Vue!'
    , NAME : "Abhijeet Pokhriyal"
  },
  methods:{

  }
})
