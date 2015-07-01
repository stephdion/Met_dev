Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/accueil', function () {
    this.render('accueil');
});

Router.route('/pageTwo', function () {
    this.render('pageTwo');
});

Router.route('/', function () {
    Router.go('accueil');
});
