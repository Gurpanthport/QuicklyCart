Template.profile.events({
   'change .myFileInput': function (event, tmpl) {
       FS.Utility.eachFile(event, function(file){

           var fileObj = new FS.File(file);
           fileObj.metadata = { owner: Meteor.userId() };
           Images.insert(fileObj);

           Images.insert(file, function(err, fileObj){
             if(!err){
                 var userId = Meteor.userId();
                 var imageurl = {
                     'profile.avatar': '/cfs/files/images/' + fileObj._id
                 };
                 setTimeout(function(){
                     Meteor.users.update(userId, {$set:imageurl});
                 })
             }

           })


       })
   }
});

// Template.profile.helpers({
//     'userImages': function () {
//     return Images.find({ 'metadata.owner': Meteor.userId() });
// }

Template.profile.helpers({
    avatar: function () {
        return Meteor.user().profile.avatar;
    }
});