const profile = (req, res) => {
    res.render('profile', {title: "Social Media"});
};

module.exports = {
    profile
}