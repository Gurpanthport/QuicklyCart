Meteor.publish('product', function () {
    return Product.find({});
});


Meteor.publish("fileUploads", function () {
    console.log("publishing fileUploads");
    return feedImages.find();
});
