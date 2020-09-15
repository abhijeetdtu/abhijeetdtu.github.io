var jupyterComp = Vue.component('jupyter', {
   props: ["notebooks"],
   data:function(){
     return {
       selected : null
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
              <ul class="nav">
                <li class="nav-item" v-for="notebook in notebooks">
                  <button class="btn btn-sm" v-bind:class="{'selected-notebook' : selected == notebook}" v-on:click="selected = notebook">{{notebook.title}}</button>
                </li>
              </ul>
            </div>
            <div class="row" v-if="selected">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" v-bind:src="selected.link"></iframe>
                </div>
            </div>
        </div>

    </div>
  </div>
  `
})
