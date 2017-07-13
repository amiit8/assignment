document.onreadystatechange = function(){
  if(document.readyState == 'complete'){
    var posts = new Model({
      url : 'https://jsonplaceholder.typicode.com/posts'
    });

    posts.fetch();

    var mainView = new View();
    mainView.el = document.getElementById('post');
    mainView.model = posts;
    posts.view = mainView;
    mainView.render = function(){
      var userIdEl = this.el.querySelector('.user-id');
      this.model.data.forEach(function(item){
        userIdEl.options.add(new Option(item.userId, item.userId));
      });
      
    };

    //mainView.render();
  }
};