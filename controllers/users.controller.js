
function index(req, res) {
    const result = "Users list";
    res.send(result);
}

module.exports = {
    index: index
}