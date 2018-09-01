Template.signin.events({
   'submit form': function (evt) {
       evt.preventDefault();
       var username = evt.target.username.value;
       var password = evt.target.password.value;
       Meteor.loginWithPassword(username,password);
       FlowRouter.go('/');
   }
});