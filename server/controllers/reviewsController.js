module.exports = {
    getAll: async (req, res) => {
        const prodId = +req.params.prodId;
        const db = req.app.get('db');

        let reviews;
        try {
            reviews = await db.reviews.getAll(prodId);
        } catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.status(200).json(reviews)
    },
    add: async (req, res) => {
        const {product_id, review, rating} = req.body;
        const {userId} = req.session.user;
        const db = req.app.get('db');
        console.log(req.body)
        console.log(userId)

        const reviews = await db.reviews.add(product_id, userId, review, rating);

        res.status(200).json(reviews)
    },
    edit: async (req, res) => {
        const { editedReview } = req.body; 
        const prodId = +req.params.prodId;
        const revId = +req.params.revId;
        const db = req.app.get('db');

        const reviews = await db.reviews.edit(prodId, revId, editedReview); 

        res.status(200).json(reviews)
    },
    delete: async (req, res) => {
        const prodId = +req.params.prodId;
        const revId = +req.params.revId;
        const db = req.app.get('db');

        const reviews = await db.reviews.delete(prodId, revId);

        res.status(200).json(reviews)
    }
}