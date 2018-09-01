/**Check to see if the user has a profile if
* it doesn't create one and give the username a
 * firstname and a password **/

Meteor.startup(function(){
    Accounts.onCreateUser(function(options,user){
       if(!user.profile){
           user.profile = {};
       }
       user.profile.firstname = options.firstname;
       user.profile.lastname = options.lastname;
       return user;
    })
});