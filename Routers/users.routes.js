const usertController = require('../Controllers/users.controllers')
const auth = require('../Middleware/auth.middleware');
const verifySignUp = require('../Middleware/verifySignUp.middleware');

const router = require('express').Router()

router.post('/login', usertController.userLogin)
router.post('/register', verifySignUp.checkDuplicateUsernameOrEmail, usertController.userRegister)
router.get('/:id', auth.checkAuth, usertController.getMe)
module.exports = router
