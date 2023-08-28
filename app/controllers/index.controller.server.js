//controller contains my functions

// my custom middleware
export function helloWorld(req, res, next){
    res.render('index',{title: 'Home'});
};