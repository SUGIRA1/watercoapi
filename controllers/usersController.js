import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Users from "../models/user.js";

dotenv.config();

//Add a User - Sign Up
export async function addUser(req, res) {
    try {
        // let userExists = await Users.findAll({where: {Email: req.body.Email}});
        // if (userExists) {
        //     res.status(500).json({
        //     success: false,
        //     message: "Oopss! User Email already exists..."
        //     });
        // } else {
        bcrypt.hash(req.body.Password, 10).then(async (hash) => {
            let userObj = {
                Email: req.body.Email,
                Password: hash,
                UserName: req.body.UserName,
            }
            let user = await Users.create(userObj);
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'User created successfully',
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User could not be created at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a user
export async function viewUser(req, res) {
    try {
        let user = await Users.findAll({ where: { UserID: req.params.id } });
        if (user) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: user
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all users
export async function viewAllUsers(req, res) {
    try {
        let allusers = await Users.findAll();
        if (allusers) {
            res.json({
                success: true,
                message: 'User records retrieved successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No User records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Sign In
export async function signIn(req, res) {
    //Get a user with the email address
    //Ensure that their password is correct
    //Create a JWT for them. (For Authenticating Other API Requests)
    try {
        let user = await Users.findOne({ where: { Email: req.body.Email } })
        if (!user) {
            return res.status(401).json({
                status: 'failed',
                message: "Authentication Failed: User with email address not found."
            })
        }
        bcrypt.compare(req.body.Password, user.Password).then(response => {
            if (!response) {
                console.log(response);
                return res.status(401).json({
                    status: 'failed',
                    message: "Authentication Failed: Incorrect password."
                })
            }

            let authToken = jwt.sign({ Email: user.Email, UserID: user.UserID },
                process.env.AUTH_KEY, { expiresIn: "1h" });

            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: { UserName: user.UserName, Email: user.Email, UserID: user.UserID },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update user password
export async function updateUserPass(req, res) {
    try {
        bcrypt.hash(req.body.Password, 10).then(async (hash) => {
            let userObj = {

                Password: hash

            }
            let user = await Users.update(userObj, { where: { UserID: req.params.id } });
            if (user) {
                res.status(200).json({
                    success: true,
                    message: 'User password updated successfully',
                    data: user
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User password could not be updated at this time'
                })
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update user record
export async function updateUser(req, res) {
    try {

        let updateduser = await Users.update(req.body, { where: { UserID: req.params.id } });
        if (updateduser) {
            res.json({
                success: true,
                message: 'user records updated successfully',
                data: updateduser
            })
        } else {
            res.json({
                success: true,
                message: 'No user records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Delete user
export async function deleteUser(req, res) {
    try {

        let userToDelete = await Users.findAll({ where: { UserID: req.params.id } });
        if (userToDelete) {
            let deleteduser = await Users.destroy({ where: { UserID: req.params.id } });
            if (deleteduser) {
                res.json({
                    success: true,
                    message: 'User records deleted successfully',

                })
            } else {
                res.json({
                    success: true,
                    message: 'No user records found.',
                })
            }

        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
