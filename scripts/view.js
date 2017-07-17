var View = function(config){
  if(config){
    this.el = config.el || {};
    this.model = config.model || {};
    this.render = config.render || {};
  }

};