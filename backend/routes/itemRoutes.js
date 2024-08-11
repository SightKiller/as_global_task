const express = require('express');
const itemController = require('../controller/itemController');

const router = express.Router();

router.post('/items', itemController.addItem);
router.get('/items', itemController.getItems);
router.get('/items/:id', itemController.getItemById);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
