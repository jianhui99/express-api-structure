const jwt = require("jsonwebtoken");
const {successResponse, errorResponse } = require('../Utils/apiResponse')

const checkAuth = (req, res, next)  => {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send(errorResponse("Access Denied!, no token entered"));
    try {
        const verified = jwt.verify(token, process.env.jwtSecret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send(errorResponse("auth failed"));
    }
};

module.exports = {
    checkAuth,
}