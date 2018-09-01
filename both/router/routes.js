Router.route('/', function () {
    if(!Meteor.user()){
        this.render('signin');
    }
    else {
        this.render('home')
    }
});

Router.route('register', function () {
    this.render('register');
});

Router.route('cart', function () {
    this.render('cart');
});


Router.route('signin', function () {
    if(!Meteor.user()){
        this.render('signin');
    }
    else {
        this.render('home')
    }});


Router.route('profile', function () {
    Meteor.subscribe('users');
    this.render('profile');
});



Router.route('users', function () {
    Meteor.subscribe('thisuser');
    this.render('users');
});

loginRequired = function () {
    if (!Meteor.user()) {
        if (!Meteor.loggingIn()) {
            this.render('signin');
        }
    } else {
        this.next();
    }
};
//Execute the LoginRequired function before login.
Router.onBeforeAction(loginRequired, {except: 'register'});
