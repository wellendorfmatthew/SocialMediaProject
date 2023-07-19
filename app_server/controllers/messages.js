const messages = (req, res) => {
    res.render('messages', {title: "Social Media"});
};

module.exports = {
    messages
}