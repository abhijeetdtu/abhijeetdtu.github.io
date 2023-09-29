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
            <div class="row border border-2 rounded-3 pt-1">
                <div class="col-4">
                    <img class="img-fluid rounded img-logo"  src="https://github.com/abhijeetdtu/abhijeetdtu.github.io/assets/6872080/55b6eaec-2c1b-4146-8bde-3e7b38d3c6bf"></img>
                </div>
                <div class="col-8">
                    <div class="brand-story">
                        <div class="headings">
                            <h1 class="display-1">Discover</h1>
                            <h1 class="display-2">Rich History of</h1>
                            <h1 class="display-3">Map Making with Milam Mundi </h1>
                            <h1 class="display-4"></h1>
                        </div>
                        <hr/>
                        <div class="story-text lbh-lg">
                            <p>A rich history that dates back to centuries ago when cartographers first started creating detailed maps of various regions around the world. These early mapmakers were often explorers, scientists or artists who traveled far and wide to document new lands and territories.</p>
                            <p>Over time, their work evolved into an important tool for navigation, trade, and conquest. Today, we pay tribute to these pioneering cartographers by offering a curated selection of vintage maps that showcase the artistry and historical significance of map-making.</p>
                            <p>By doing so, we not only provide customers with unique pieces of history but also inspire curiosity and adventure in those who love to explore new places and cultures. Join us on this journey through time as we celebrate the rich history of map making!</p>
                            <hr/>
                            <blockquote class="blockquote">
                                <p>Maps have a way of connecting people across time and space.</p>
                            </blockquote>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
    `
  })
  