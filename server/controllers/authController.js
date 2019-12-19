const bcrypt = require("bcryptjs");
require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'camacrawford625@gmail.com',
        pass: "randompassword236"
    }
});

module.exports = {
    register: async (req, res) => {
        const {first_name, last_name, email, password} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForEmail(email)

        if (foundUser[0]) {
            res.status(409).json({message: "Username Already Taken"})
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            const newUser = await db.auth.registerUser(first_name, last_name, email, hash, "false");

            req.session.user = {
                userId: newUser[0].user_id,
                firstName: newUser[0].first_name,
                lastName: newUser[0].last_name
            };

            let mailOptions = {
                to: email,
                from: 'camacrawford625@gmail.com',
                subject: 'Welcome to Clothing Store',
                text: `Thank you for choosing to shop at Clothing Store! We hope you find everything you want and need!`
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log("here is the error", error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            })


            res.status(200).json(req.session.user)
        }
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForEmail(email);
        console.log(foundUser);
        if (!foundUser[0]) {
            res.status(403).json({message: "Username not found"});
        } else {
            const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)
            console.log(foundUser)

            if (!isAuthenticated) {
                res.status(403).json({message: "Password is Incorrect"});
            } else {
                req.session.user = {
                    userId: foundUser[0].user_id,
                    firstName: foundUser[0].first_name,
                    last_name: foundUser[0].last_name
                }

                res.status(200).json(req.session.user);
            }
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}