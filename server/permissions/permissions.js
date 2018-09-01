//Allowing the current user to upload the image and connecting its image to the userID
Meteor.users.allow({
    insert: function (userId, doc) {
        return userId;
    },
    update: function(userId,doc,fields,modifier){
       return userId && doc._id === userId;
    },
    remove: function (userId) {
        return userId
    }
});
//Allow Images to be uploaded.
Images.allow({
    insert: function () {

        return true;
    },
    update: function () {

        return true;
    },
    remove: function () {

        return true;
    },
    download: function () {

        return true;
    }
});


//Feed Images
feedImages.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
});

feedImages.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});