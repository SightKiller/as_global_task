const Item = require('../models/Item');

exports.addItem = async (req, res) => {
    try {
        const { itemName, price } = req.body;
        const newItem = new Item({ itemName, price });
        const savedItem = await newItem.save();
        res.status(201).json({ message: 'Item added successfully', item: savedItem });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { itemName, price } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(id, { itemName, price }, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
