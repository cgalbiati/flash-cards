app.controller('MainController', function ($scope, FlashCardsFactory) {
	

	FlashCardsFactory.getFlashCards()
	.then(function(cardsArr) {
		$scope.flashCards = cardsArr;
	}).catch(function(err){
		console.error(err, err.message);
	});

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
		}
	};

	$scope.getCategoryCards = function (category) {
		FlashCardsFactory.getFlashCards(category)
		.then(function(cardsArr) {
			$scope.flashCards = cardsArr;
		}).catch(function(err){
			console.error(err, err.message);
		});
	}
});