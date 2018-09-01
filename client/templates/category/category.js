Template.category.onCreated(function(){
   this.subscribe('product');
});
Template.category.helpers({
    categoryName:function(){
        return FlowRouter.getParam('categoryName');
},
    products:function(){
        return Product.find();
    }
});