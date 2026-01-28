let items = []; // Temporary in-memory storage

exports.getItems = (req, res) => {
    res.status(200).json(items);
};

exports.getItemById = (req, res) => {
    const item = items.find(i => i.id === req.params.id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
};

exports.createItem = (req, res) => {
    const newItem = {
        id: Date.now().toString(),
        name: req.body.name
    };

    items.push(newItem);
    res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    items[index].name = req.body.name;
    res.status(200).json(items[index]);
};

exports.deleteItem = (req, res) => {
    items = items.filter(i => i.id !== req.params.id);
    res.status(204).send();
};
