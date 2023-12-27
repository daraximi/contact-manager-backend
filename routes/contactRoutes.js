const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
});
router.get('/:id', (req, res) => {
    res.status(200).json({ message: `Get single contact: ${req.params.id}` });
});
router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create contact' });
});
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Deleted contact: ${req.params.id}` });
});

module.exports = router;
