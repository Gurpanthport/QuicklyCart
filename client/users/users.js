Template.users.helpers({
    'allUsers': function () {
        return Meteor.users.find({});
    }
});

Meteor.subscribe ('users');