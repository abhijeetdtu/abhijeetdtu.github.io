var jupyterComp = Vue.component('jupyter', {
   props: ["notebooks"],
   data:function(){
     return {
       selected : null
     }
   },
   methods:{
    select_notebook:function(notebook){
      this.selected = null;
      self = this;
      window.setTimeout(function(){
        self.selected = notebook
      },50)
    }
   },
   mounted:function(){
     this.selected = this.notebooks[0]
   },
  template:`
  <div>


    <div class="row">
        <div class="col-md-12">
            <div class="row">
              <div class="col-md-2">
                <ul class="nav nav-flex">
                  <li class="nav-item li-jupyter" v-for="notebook in notebooks">
                    <p class="btn btn-sm btn-jupyter" v-bind:class="{'selected-notebook' : selected == notebook}" v-on:click="select_notebook(notebook)">{{notebook.title}}</p>
                  </li>
                </ul>
              </div>
              <div class="col-md-10">
              <div class="row" v-if="selected">
                  <div v-if="selected.type == 'local'"  class="embed-responsive embed-responsive-1by1">
                      <iframe class="embed-responsive-item" v-bind:src="selected.link"></iframe>

                  </div>

                  <div v-if="selected.type == 'embedly'"  >
                      <a data-card-controls="0" class="embedly-card"  v-bind:href="selected.link">
                        {{selected.title}}
                      </a>
                  </div>
              </div>
              </div>
            </div>

        </div>

    </div>
  </div>
  `
})
