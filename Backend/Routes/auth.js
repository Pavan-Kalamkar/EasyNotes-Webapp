const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "String";


// Route 1
// Create a User Using POST "/api/auth/createuser". Doesn't require auth (EndPoint of Create User)
router.post('/createuser',
    // Data Validation check whether the data is correct or not
    [
        body('name', "Enter a valid name").isLength({ min: 3 }),
        body('email', "Enter a valid email").isEmail(),
        body('password', "Enter Strong Password").isLength({ min: 5 }),
    ]
    , async (req, res) => {
        let success = false;
        //If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        // Check whether the user email exits already
        let user = await User.findOne({ email: req.body.email });
        try {
            if (user) {
                return res.status(400).json({ success, error: "Sorry the user with this email is exits" })
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            // res.json({user})
            success = true;
            res.json({ success, authtoken })

        } catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occurs")
        }
    })


// Route 2
// Login a User Using POST "/api/auth/login".No login required (User Login EndPoints)
router.post('/login',
    //Data Validation check whether the data is correct or not
    [
        body('email', "Enter a valid email").isEmail(),
        body('password', "Password can not be blank").exists(),
    ]
    , async (req, res) => {

        let success = false;
        //If there are errors, return Bad request and the errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                success = false;
                return res.status(400).json({ success, error: "Please enter correct credentials" });
            }

            const passwordCompare = await bcrypt.compare(password, user.password);

            if (!passwordCompare) {
                success = false;
                return res.status(400).json({ success, error: "Please enter correct credentials" });
            }

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authtoken })


        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error occurs")
        }
    })


//Route 3 : Get loggedin User Details Using : POST "/api/auth/getuser".Login required 

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router