const notFound = (req, res) => res.status(404).send('The route do not existed');

module.exports = notFound;