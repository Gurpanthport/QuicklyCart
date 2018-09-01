Template.register.events({
   'submit form': function(evt){
       evt.preventDefault();
       var username = evt.target.username.value;
       var password = evt.target.password.value;
       var firstname = evt.target.firstname.value;
       var lastname = evt.target.lastname.value;
       Accounts.createUser({
          username: username,
          password: password,
           firstname: firstname,
           lastname: lastname
       });
   }
});