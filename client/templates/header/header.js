Template.header.events({
    'click .logout': function (event) {
        event.preventDefault();
        Meteor.logout(function (err) {
            if(!err){
                Router.go('/signin');
            }
            else{
                return "Contact IT" + err
            }
        })
    }
});




