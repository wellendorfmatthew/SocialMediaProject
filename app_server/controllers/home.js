const home = (req, res) => {
    res.render('home', {title: "Social Media"});
};

module.exports = {
    home
}