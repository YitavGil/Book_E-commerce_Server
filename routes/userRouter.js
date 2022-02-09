const router = require('express').Router();
const req = require('express/lib/request');
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');


router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.post('/library', auth, userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth, userCtrl.getUser)

router.patch('/addtocart', auth, userCtrl.addToCart)

router.patch('/addtoread', auth, userCtrl.addToRead)


module.exports = router