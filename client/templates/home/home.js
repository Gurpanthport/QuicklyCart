Template.home.helpers({
    categories: function () {
        Meteor.subscribe('category');
        return Category.find({});
    }
});


Template.header.events({
    'submit #category': function (event) {


        event.preventDefault();
        var categoryName = event.target.categoryName.value;
        var createdBy = Meteor.userId();
        var productPrice = event.target.productPrice.value;
        Category.insert({
            categoryName: categoryName,
            createdAt: new Date(),
            createdBy: createdBy,
            productPrice: productPrice
        }, function (err) {
            if(!err){
                console.log("Entry made");
            }
        }
            );
        Meteor.subscribe('category');
        event.target.categoryName.value = "";

        return false;
    },
    'change .myFeedImgInput': function (event, template) {
        console.log("uploading...")
        FS.Utility.eachFile(event, function (file) {
            console.log("each file...");
            var yourFile = new FS.File(file);
            feedImages.insert(yourFile, function (err, fileObj) {
                console.log("callback for the insert, err: ", err);
                if (!err) {
                    console.log("inserted without error");
                }
                else {
                    console.log("there was an error", err);
                }
            });
        });
    }
});



Template.header.events({
    'click #deleteFileButton ': function (event) {
        console.log("deleteFile button ", this);
        feedImages.remove({_id: this._id});
    }
/*    'change .myFeedImgInput': function (event, template) {
        console.log("uploading...")
        FS.Utility.eachFile(event, function (file) {
            console.log("each file...");
            var yourFile = new FS.File(file);
            feedImages.insert(yourFile, function (err, fileObj) {
                console.log("callback for the insert, err: ", err);
                if (!err) {
                    console.log("inserted without error");
                }
                else {
                    console.log("there was an error", err);
                }
            });
        });
    }*/
});






/*
Template.header.events({
    'change .myFeedImgInput': function (event, tmpl) {
        FS.Utility.eachFile(event, function(file){

            var fileObj = new FS.File(file);
            fileObj.metadata = { owner: Meteor.userId() };
            feedImages.insert(fileObj);

            feedImages.insert(file, function(err, fileObj){
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
*/

Meteor.subscribe("fileUploads");
Template.home.helpers({

    feedImg: function () {
        return feedImages.find(); // Where Images is an FS.Collection instance
    }
});