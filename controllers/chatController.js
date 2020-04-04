exports.index = (req, res, next) => {
    res.render('chat', { title: 'Chat' });
}