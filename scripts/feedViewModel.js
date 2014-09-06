define(['knockout'], function (ko) {

    function Status(message, userName, id) {
        this.message = ko.observable(message);
        this.userName = ko.observable(userName);
        this.id = ko.observable(id);
        this.comments = ko.observableArray();
    }


    var feedViewModel = {
        statuses: ko.observableArray(),
        newStatus: ko.observable(),
        addStatus: function () {
            this.statuses.push(new Status(this.newStatus(), 'You', new Date().getTime()));
        }
    };

    feedViewModel.statuses.push(new Status('This is a message', 'You', new Date().getTime()));
    feedViewModel.statuses.push(new Status('I love bacon!', 'The Dog', new Date().getTime()));

    return feedViewModel;

});
