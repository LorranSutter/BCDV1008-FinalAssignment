exports.index = (req, res, next) => {
    res.render('rooms', { title: 'Rooms', username: req.cookies.username, avatar: req.cookies.avatar });
}

exports.roomsLogin = (req, res, next) => {
    const username = req.body.username;
    const avatar = `https://avatars.dicebear.com/v2/gridy/${username}.svg?options[width][]=500&options[height][]=500`;

    res.cookie('username', username);
    res.cookie('avatar', avatar);

    res.render('rooms', { title: 'Rooms', username: username, avatar: avatar });
}