define(['libraries/knockout'], function (ko) {


    function Status(message, userName, id) {
        this.message = ko.observable(message);
        this.userName = ko.observable(userName);
        this.id = ko.observable(id);
        this.comments = ko.observableArray();
    }


    var feedViewModel = {
        statuses: ko.observableArray(),
        newStatusMessage: ko.observable(),
        addNewStatus: function () {
            this.statuses.push(new Status(this.newStatusMessage(), 'You', new Date().getTime()));
            this.newStatusMessage('');
        }

    };

    feedViewModel.statuses.push(new Status('This is a message', 'You', new Date().getTime()));
    feedViewModel.statuses.push(new Status('I love bacon!', 'The Dog'));

    return feedViewModel;

});
