const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};
const createContact = (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(200).json({ message: "Create New Contact" });
};
const getContact = (req, res) => {
    res.status(200).json({ message: `Get Contact ${req.params.id}` });
};
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contact ${req.params.id}` });
};
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
};
