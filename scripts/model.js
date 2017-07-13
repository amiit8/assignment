var Model = function(config){
  if(config){
    this.url = config.url;
  }
  this.fetch = function(){
    var xhr = new XMLHttpRequest();
    var self = this;
    xhr.onreadystatechange = function(){
      if(this.readyState  == 4 ){
        if(this.status == 200 || this.status == 304){
          self.handleSucess(this.responseText); 
        }
        else{
          self.handleFailure();
        }
        
      }
    };
    xhr.open("GET", this.url, true);
    xhr.send();
  };
  this.handleSucess = function(resp){
    if(resp){
      var parsedData = JSON.parse(resp);
      this.data = parsedData;
      this.view.render();
    }
  };
  this.handleFailure = function(resp){
    this.data = null;
    alert('Rest call failed');
  };

};



