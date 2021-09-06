module.exports = (req, res, next) => {
    console.log(`Ip product: ${req.connection.remoteAddress}`);
    next();
};