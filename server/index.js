require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const stripe = require('stripe')('sk_test_8oqOcDmuVwsxKpE5hD2Oire800r3RCjyVF');
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const cartController = require("./controllers/cartController");

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());

stripe.checkout.sessions.create(
    {
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
    payment_method_types: ['card'],
    line_items: [
        {
        name: 'T-shirt',
        description: 'Comfortable cotton t-shirt',
        amount: 1500,
        currency: 'usd',
        quantity: 2,
        },
    ],
},
    function(err, session) {
    // asynchronously called
        if (!err) {
            console.log('Stripe Connected: ' + session)
        } else {
            console.log(err)
        }
    }
);

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 
    }
}));

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Good, The Database Is Running")
})

app.post("/auth/user/new", authController.register);
app.post("/auth/user/login", authController.login);
app.post("/auth/user/logout", authController.logout);

app.get("/api/products/tops", productController.getTops);
app.get("/api/products/bottoms", productController.getBottoms);
app.get("/api/products/shoes", productController.getShoes);
app.get("/api/products/accessories", productController.getAccessories);
app.get("/api/products/all", productController.getAll);

app.post("/api/cart", cartController.addToCart)
app.get("/api/cart", cartController.getCart)
app.put("/api/cart", cartController.editCart)
app.delete("/api/cart/:id", cartController.removeFromCart)

app.listen(SERVER_PORT, () => console.log(`Server Listening on Port ${SERVER_PORT}`));