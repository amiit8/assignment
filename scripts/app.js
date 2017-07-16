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
      var postIdEl = this.el.querySelector('.post-id');
      var titleEl = this.el.querySelector('.title');  
      var bodyEl = this.el.querySelector('.body');

      this.model.data.forEach(function(item){
        postIdEl.options.add(new Option(item.id, item.id));
      });

      var self = this;
      postIdEl.addEventListener('change', function(e){
        var selectedId = parseInt(e.currentTarget.value);
          var selectedPosts = self.model.data.filter(function(item){
          return item.id === selectedId;
        });
        var selectedPost = selectedPosts.shift();

        if(checkEven(selectedId)){
          bodyEl.disabled = true;
          bodyEl.innerHTML = selectedPost.body;
          bodyEl.parentElement.parentElement.classList.remove('hidden');
        }
        else{
          bodyEl.parentElement.parentElement.classList.add('hidden');
        }

        titleEl.options.add(new Option(selectedPost.title, selectedPost.title));
        function checkEven(num){
          return num%2 === 0;
        }
      });

      
    };

    //mainView.render();
  }
};