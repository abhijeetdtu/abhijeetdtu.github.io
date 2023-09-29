var milamMundi = Vue.component('milammundi', {
    mixins: [mixin],
    props: ["events"],
    data: function() {
      return {
        domid: 'milammundi'
      }
    },
    template: `
    <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="container">
            <div class="row">
                <div class="col">
                    <img class="img-fluid" scr="https://github.com/abhijeetdtu/abhijeetdtu.github.io/assets/6872080/fbc9c0b3-37e8-4de6-8ddf-41ac870e7add"></img>
                </div>
            </div>
          </div>
       </div>
    </div>
    `
  })
  