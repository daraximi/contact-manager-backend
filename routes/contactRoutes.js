const router = require('express').Router();
const validateToken = require('../middleware/validateTokenHandler');
const {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact,
} = require('../controllers/contactControllers');
//Routes
router.use(validateToken);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// router.get('/', getContacts);
// router.get('/:id', getContact);
// router.post('/', createContact);
// router.put('/:id', updateContact);
// router.delete('/:id', deleteContact);

module.exports = router;
