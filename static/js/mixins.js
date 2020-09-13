var mixin = {
  data : function(){
    return {
      COLORS : ['#00429d', '#2e59a8', '#4771b2', '#5d8abd', '#73a2c6', '#8abccf', '#a5d5d8', '#c5eddf', '#ffffe0'],
      CAT_COLORS : ['#264653ff', '#f6ae2d', '#f26419', '#fac05e', '#bd632f']

    }
  }
  ,methods: {
      get_random_colors:function(num){
        selected = []
        for(var i = 0 ; i< num ; i++){

            do{
              idx = Math.floor(Math.random()*this.COLORS.length)
            }
            while(selected.findIndex(function(a){return a == idx}) > 0)
            selected.push(this.COLORS[idx])

        }

        return selected
      },
      get_sequential_colors:function(idx){
        return this.CAT_COLORS[idx % this.CAT_COLORS.length]
      }
    }
};
