const {
    registerUser,
    loginUser,
    currentUser,
} = require('../controllers/userController');

const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', currentUser);

module.exports = router;