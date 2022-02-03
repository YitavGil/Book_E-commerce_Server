const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userCtrl = {
    register: async (req, res) => {
       try {
            const {name, email, password} = req.body;

            const user = await Users.findOne({email})
            if (user) {
                return res.status(400).json({msg: "This email address is already being used."})
            } 

            if (password.length < 6) {
                return res.status(400).json({msg: "Password must be at least 6 characters."})
            }

            // Password encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, password: passwordHash
            })

            // Save mongodb

            await newUser.save()

            // Create jsonwebtoken for authentication
            const accessToken = createAccessToken({id: newUser._id});
            const refreshtoken = createRefreshToken({id: newUser._id});

            res.cookie('refreshtoken', refreshtoken, {
             httpOnly: true,
             path: '/user/refresh_token'   
            })

            res.json({accessToken})

       } catch(err) {
           return res.status(500).json({msg: err.message})
       }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if (!user){
                return res.status(400).json({msg: "User does not exist."})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch){
                return res.status(400).json({msg: "Incorrect username or password!"})
            }

            // If login success, create access and refresh tokens token
            const accessToken = createAccessToken({id: user._id});
            const refreshtoken = createRefreshToken({id: user._id});

            res.cookie('refreshtoken', refreshtoken, {
             httpOnly: true,
             path: '/user/refresh_token'   
            })

            res.json({accessToken})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req, res) => {
        try {
           res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
           return res.json({msg: "Successfully logged out"}) 
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },
    refreshToken: (req, res) => {
        try{
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) {
                return res.status(400).json({msg: "Please Login or Register"})
            }

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err){
                    return res.status(400).json({msg: "Please Login or Register"})
                }
                const accesstoken = createAccessToken({id: user.id})
                res.json({accesstoken})
            })

        } catch(err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if (!user) return res.status(400).json({msg: "User does not exist."}) 

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },
    addToCart: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: err.message})
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1d"})
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"})
}

module.exports = userCtrl