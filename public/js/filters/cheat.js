app.filter('cheat', function(){
  return function(collection){
    return collection.filter(function(answer){
      return answer.correct;
    });
  };
});
