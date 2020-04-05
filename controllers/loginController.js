exports.index = (req, res, next) => {
    // res.clearCookie('username');
    // res.clearCookie('avatar');
    res.render('index', { title: 'Full Chat' });
}

// exports.session = (req, res, next) => {
//     res.cookie('username', req.body.username);
//     res.cookie('avatar', `https://avatars.dicebear.com/v2/gridy/${req.body.username}.svg?options[width][]=500&options[height][]=500`);
    
//     res.redirect('rooms');
// }