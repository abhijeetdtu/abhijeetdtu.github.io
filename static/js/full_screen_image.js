Vue.component('full-screen-img', {
      props: ['imgsrc'],
      methods: {
        close : function(){
          this.$emit("closeimg")
        }
      },
      template:`
      <div class="container">
        <div class="img-viewer d-flex h-100">
          <div class="row justify-content-center align-self-center">
            <div class="col-md-12">
              <div class="row-fluid">
                <div class="col-md-12 d-flex justify-content-end">
                <button class="btn btn-danger" v-on:click="close">
                    <i class="fa fa-window-close" aria-hidden="true"></i>
                 </button>
                 </div>
              </div>
              <div class="row-fluid d-flex justify-content-center align-self-center">
                <img v-bind:src="imgsrc" class="img-thumbnail align-middle" style="width:90%"></img>
              </div>

            </div>
          </div>
          </div>
      </div>
      `
})
