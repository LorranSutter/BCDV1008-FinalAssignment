exports.index = (req, res, next) => {
    res.render('rooms', { title: 'Rooms' });
}