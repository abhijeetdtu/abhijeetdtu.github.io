
var router2 = new VueRouter({
  routes : [
    {path : "/timeline" , component : timelineComp , props: { events : events.reverse()}},
    {path : "/projects" , component : timelineComp , props: { events : projects}},
    {path : "/jupyter" , component : jupyterComp , props: { notebooks : jupyter_notebooks}},
    {path : "/binder" , component : binderComp },
    { path: '*', redirect: '/projects'}
  ]
})


var app = new Vue({
  el: '#app',
  router : router2,
  data: {
    message: 'Hello Vue!'
    , NAME : "Abhijeet Pokhriyal"
    , BINDER_URL : "https://mybinder.org/v2/gh/abhijeetdtu/computervision/master"
    , GITHUB_URL : "https://github.com/abhijeetdtu"
  }
})
