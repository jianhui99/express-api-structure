require('dotenv').config()
const db = require('../Models')
const Joi = require('joi')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {successResponse, errorResponse } = require('../Utils/apiResponse')

// model
const User = db.users
const UserAddress = db.userAddress

const userRegister = async (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 8),
    });
  
    res.status(200).send(successResponse(user))

  } catch (error) {
    res.status(500).send(errorResponse(`${error.message}`, 500));
  }
}

const userLogin = async (req, res) => {
  const schema = Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (error) {
    res.status(400).send(errorResponse(`${error.details[0].message}`))
  }

  try{
    const user = await User.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      return res.status(404).send(errorResponse('User not found'));
    }

    const passwordIsValid = bcrypt.compareSync(
      password,
      user.password
    )

    if (!passwordIsValid) {
      return res.status(401).send(errorResponse('Invalid password.'));
    }

    const token = jwt.sign({ id: user.id }, process.env.jwtSecret, {
      expiresIn: 86400,
    });

    let userInfo = {
      id : user.id,
      name : user.name,
      email : user.email,
      token : token,
    }

    return res.status(200).send(successResponse(userInfo));

  }catch (error){
    return res.status(500).send(errorResponse(`${error.message}`, 500));
  }


}

const getMe = async (req, res) => {
  const userId = req.params.id
  if(userId != req.user.id){
    return res.status(400).send(errorResponse('User authentication failed'))
  }

  const user = await User.findOne({
    include: [{
        model: UserAddress,
        as: 'addresses'
    }],
    where: { id: userId }
  })

  if(!user){
    return res.status(404).send(errorResponse('User not found'))
  }

  return res.status(404).send(successResponse(user))
}

module.exports = {
    userLogin,
    userRegister,
    getMe,
};