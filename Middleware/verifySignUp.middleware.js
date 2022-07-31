require('dotenv').config()
const db = require('../Models')
const {successResponse, errorResponse } = require('../Utils/apiResponse')
const Joi = require('joi')

const User = db.users

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const schema = Joi.object({
            name:Joi.string().min(5).required(),
            email:Joi.string().required().email(),
            password:Joi.string().min(5).required()
        });
    
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).send(errorResponse(`${error.details[0].message}`))
        }

        let user = await User.findOne({
            where: {
                name: req.body.name
            }
        });

        if (user) {
            return res.status(400).send(errorResponse("Failed! name is already in use!"));
        }

        user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (user) {
            return res.status(400).send(errorResponse("Failed! name is already in use!"));
        }

        next();
    } catch (error) {
        return res.status(500).send(errorResponse(`${error.message}`));
    }
};

module.exports = {
    checkDuplicateUsernameOrEmail
}