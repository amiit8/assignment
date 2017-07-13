var Model = function(config){
  if(config){
    this.url = config.url;
  }
  this.fetch = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(this.readyState  == 4 ){
        if(this.status == 200 || this.status == 304){
          console.log(this.responseText);
        }
 
      }
    };
    xhr.open("GET", this.url, true);
    xhr.send();
  };


};



