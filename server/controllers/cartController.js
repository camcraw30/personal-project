module.exports = {
    addToCart: async function(req, res) {
        const db = req.app.get("db");
        const {id} = req.body;
        const {userId} = req.session.user;
        const amount = await db.cart.checkIfInCart(id, userId);
        console.log(amount);
        if(!amount[0]) {
            await db.cart.addToCart(userId, id);
        } else {
            await db.cart.updateAmount(amount[0].amount + 1, id, userId)
        }
        res.sendStatus(200);
    },
    getCart: async function(req, res) {
        const {userId} = req.session.user;
        const db = req.app.get("db");
        const cart = await db.cart.getCart(userId);
        res.status(200).json(cart);
    },
    editCart: async function(req, res) {
        const db = req.app.get("db");
        const {userId} = req.session.user;
        const {product_id, amount} = req.body;
        await db.cart.updateAmount(amount, product_id, userId);
        res.sendStatus(200);
    },
    removeFromCart: async function(req, res) {
        const db = req.app.get("db");
        const {userId} = req.session.user;
        const {id} = req.params;

        await db.cart.removeFromCart(userId, id);

        const cart = await db.cart.getCart(userId);
        res.status(200).json(cart);

    }
}