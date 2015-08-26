app.factory('FlashCardsFactory', function ($http) {

    function getFlashCards (category){
        var queryParams = {};

        if (category) queryParams.category = category;

        return $http.get('/cards', {params: queryParams})
        .then(function(response){
            return response.data;
        });
    }

    return { getFlashCards: getFlashCards };
});
