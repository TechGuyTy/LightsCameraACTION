module.exports = {
    hello: function (req, res) {
        if (!req.body.name) {
            return res.send('An error occurred: Name is a required paramter');
        }
    }
};
