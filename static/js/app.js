
var router2 = new VueRouter({
  routes : [
    {path : "/timeline" , component : timelineComp , props: { events : events}},
    {path : "/projects" , component : timelineComp , props: { events : projects}},
    {path : "/jupyter" , component : jupyterComp , props: { notebooks : jupyter_notebooks}},
    { path: '*', redirect: '/jupyter'}
  ]
})


var app = new Vue({
  el: '#app',
  router : router2,
  data: {
    message: 'Hello Vue!'
    , NAME : "Abhijeet Pokhriyal"
  }
})
