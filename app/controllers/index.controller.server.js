//controller contains my functions

// my custom middleware
export function displayHome(req, res, next){
    res.render('index',{title: 'Home', page:'home'});
};

export function displayAbout(req, res, next){
    res.render('index', {title: 'About', page:'about'})
}
export function displayContacts(req, res, next){
    res.render('index', {title: 'Contacts', page:'contact'})
}

export function displayProjects(req, res, next){
    res.render('index', {title: 'Projects', page:'projects'})
}

export function displayServices(req, res, next){
    res.render('index', {title: 'Services', page:'services'})
}