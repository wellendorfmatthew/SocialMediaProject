const index = (req, res) => {
    res.render('/', {title: "Social Media"});
};

module.exports = {
    index
}