Vue.component('highlight', {
  mixins: [mixin],
  props : ['text' , 'type' , 'group'],
  methods:{
    get_color:function(){
      return this.get_sequential_colors(this.group)
    }
  },
  template:`
    <li class="list-group-item py-0" v-bind:class="type" v-bind:style="{backgroundColor:get_color() , color:'#f4f1de'}">
      {{text}}
    </p>
  `
})

Vue.component('card', {
      mixins: [mixin],
      props: ['title', 'text', 'highlights', 'link', 'imgsrc' , 'institute'],
      template: `
          <div class="card shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="imgsrc" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{title}}</h5>
              <p class="card-text">{{institute}} <br/> {{text}}</p>
            </div>
            <ul class="list-group list-group-flush">
              <highlight v-for="highlight in highlights"
                         v-bind:text="highlight.text"
                          v-bind:type="highlight.type"
                          v-bind:group='highlight.group'></highlight>
              </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">{{link}}</a>
            </div>
          </div>
      `
})
