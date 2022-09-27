Vue.component('highlight', {
  mixins: [mixin],
  props : ['text' , 'type' , 'group'],
  methods:{
    get_color:function(){
      return this.get_sequential_colors(this.group)
    }
  },
  template:`
    <li class="list-group-item py-0" v-bind:class="type" style="border: 0px !important" > <!-- v-bind:style="{backgroundColor:get_color()}" -->
      {{text}}
    </li>
  `
})

Vue.component('card', {
      mixins: [mixin],
      props: ['title', 'text', 'highlights', 'link', 'imgsrc' , 'institute'],
      data : function(){
        return {
          show_full_img : false,
          show_details : {
            text_tmp : {true: "Less Details" , false : "More Details"},
            show : false,
            display_text : "More Details"
          }
        }
      },
      methods:{
        toggle_details : function(){
          this.show_details.show = !this.show_details.show

          this.show_details.display_text = this.show_details.text_tmp[this.show_details.show]
        }
      },
      template: `
          <div class="card col-md-12 shadow-sm p-3 mb-5 bg-white rounded">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-body-custom  shadow-sm p-0 mb-1 rounded">
                      <div class="card-heading">
                          <p class="card-title h4">{{title}}</p>
                      </div>
                      <p class="card-text">{{institute}} <br/> {{text}}</p>
                    </div>
                   
                </div>

                <div class="col-md-8">
                    <full-screen-img v-bind:imgsrc="imgsrc" v-if="show_full_img" v-on:closeimg="show_full_img = false"> </full-screen-img>

                    <img class="img-thumbnail shadow-sm p-0 mb-1 rounded" v-bind:src="imgsrc" alt="Card image cap">
                    <i class="fa fa-expand top-right-icon" v-on:click="show_full_img = true" style="cursor:pointer"></i>

                    <hr class="bright-hr">
                </div>

            </div>

            <div class="row">
              <div class="col">
              <div class="row">
                <ul class="list-group list-group-flush">
                <highlight v-for="(highlight , idx) in highlights"
                          v-bind:key="idx"
                          v-bind:text="highlight.text"
                            v-bind:type="highlight.type"
                            v-bind:group='highlight.group' v-if="show_details.show | (!show_details.show & highlight.group < 2)"></highlight>
              </ul>
              </div>
              <div class="row">
              <div class="card-body  d-flex flex-column">
                  <a v-bind:href="link" target="_blank" v-if="link" class="btn btn-secondary btn-light" role="button" aria-disabled="true">Project Site</a>
                  <button class="card-btn btn btn-light mt-auto" v-on:click="toggle_details">{{ show_details.display_text}}</button>

              </div>
              </div>
              </div>
            </div>
          </div>
      `
})
