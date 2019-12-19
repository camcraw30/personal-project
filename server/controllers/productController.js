module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db');

        let products;
        try {
            products = await db.product.getAll();
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'Error retrieving products'});
        }

        res.status(200).json(products);
    },
    getTops: async (req, res) => {
        const db = req.app.get('db');

        let tops;
        try {
            tops = await db.product.getTops();
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'Could not find any Tops'});
        }

        res.status(200).json(tops);
    },
    getBottoms: async (req, res) => {
        const db = req.app.get('db');

        let bottoms;
        try {
            bottoms = await db.product.getBottoms();
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'Could not find any Bottoms'});
        }

        res.status(200).json(bottoms);
    },
    getShoes: async (req, res) => {
        const db = req.app.get('db');

        let shoes;
        try {
            shoes = await db.product.getShoes();
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'Could not find any Shoes'});
        }

        res.status(200).json(shoes);
    },
    getAccessories: async (req, res) => {
        const db = req.app.get('db');

        let accessories;
        try {
            accessories = await db.product.getAccessories();
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: 'Could not find any Accessories'});
        }

        res.status(200).json(accessories)
    }
}