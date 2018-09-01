Meteor.publish('category', function () {
    return Category.find({});
});

Meteor.publish('users', function () {
    return Meteor.users.find({});
});
