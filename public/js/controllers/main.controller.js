app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {


	$scope.getCards = function (category){
		FlashCardsFactory.getFlashCards(category)
		.then(function(cardsArr) {
			$scope.flashCards = cardsArr;
		}).catch(function(err){
			console.error(err, err.message);
		});
	};


	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			flashCard.answeredCorrectly? ScoreFactory.correct++ : ScoreFactory.incorrect++;
			console.log(ScoreFactory.correct);
		}
	};

	$scope.getCategoryCards = function (category) {
		$scope.categories.active = category || "all";
		$scope.getCards(category);
	};

	$scope.getCategoryCards();
});
