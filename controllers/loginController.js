exports.index = (req, res, next) => {
    // res.clearCookie('username');
    // res.clearCookie('avatar');
    res.render('index', { title: 'Full Chat' });
}