const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next)  => {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send({
        message: "Access Denied!, no token entered"
    });
    try {
        const verified = jwt.verify(token, process.env.jwtSecret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send({
            error: "auth failed"
        });
    }
};

module.exports = {
    checkAuth,
}