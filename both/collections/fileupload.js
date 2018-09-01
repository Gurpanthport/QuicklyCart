//Creating a collection for the images to be stored
Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images")]
});


//Feed Images
feedImages = new FS.Collection("feedImage", {
    stores: [new FS.Store.FileSystem("feedImage")]
});

