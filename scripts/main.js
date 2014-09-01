define(['libraries/knockout', 'feedViewModel'], function (ko, feedViewModel) {

    ko.applyBindings(feedViewModel, document.getElementById('status-container'));

});
