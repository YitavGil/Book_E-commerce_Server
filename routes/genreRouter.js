const router = require('express').Router()
const genreCtrl = require('../controllers/genreCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/')
    .get(genreCtrl.getGenres)
    .post(auth, authAdmin, genreCtrl.createGenre)

router.route('/:id')
    .delete(auth, authAdmin, genreCtrl.deleteGenre)    
    .put(auth, authAdmin, genreCtrl.updateGenre)    

module.exports = router