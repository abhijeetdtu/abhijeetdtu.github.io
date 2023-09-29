var milammundi = Vue.component('milammundi', {
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
                <div class="col-4">
                    <img class="img-fluid rounded img-logo"  src="https://github.com/abhijeetdtu/abhijeetdtu.github.io/assets/6872080/55b6eaec-2c1b-4146-8bde-3e7b38d3c6bf"></img>
                </div>
                <div class="col-8">
                        <div class="card text-center">
                        <div class="card-header">
                            Historical Maps
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
    `
  })
  