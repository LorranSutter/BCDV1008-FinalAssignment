exports.index = (req, res, next) => {
    res.render('index', { title: 'Full Chat' });
}

exports.session = (req, res, next) => {
    // localStorage.setItem('username', req.body.username)
    res.render('rooms', { title: 'Full Chat', username: req.body.username });
}