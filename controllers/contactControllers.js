const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get all contacts' });
});
//@desc Get single contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get single contact: ${req.params.id}` });
});
//@desc Create new contacts
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required');
    }
    res.status(201).json({ message: 'Create new contact' });
});
//@desc Update a single
//@route PUT /api/contacts
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
});
//@desc Delete a single contact
//@route DELETE /api/contacts
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Deleted contact: ${req.params.id}` });
});
//
module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact,
};
