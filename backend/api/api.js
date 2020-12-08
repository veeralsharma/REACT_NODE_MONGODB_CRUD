const express = require("express");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const api = new express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
var roles = require('../config/roles');

  api.post("/signup", async (req, res) => {
    await User.findOne(
      {
        email: req.body.email,
      },
      async function (err, docs) {
        if (!err) {
          if (docs) {
            res.status(200).json({
              msg: "Account already exists",
              status: "0",
            });
          } else {
            try {
              const user = new User(req.body);
              bcrypt.hash(req.body.password, 10, async (err, hash) => {
                user.password = hash;
                await user.generateAuthToken();
                user.save((err) => {
                  if (err) {
                    res.status(400).json({
                      message: err,
                      status: "-1",
                    });
                  } else {
                    res.status(201).json({
                      token:user.token,
                      message: "Account Registered",
                      status: "1",
                    });
                  }
                });
              });
            } catch (error) {
              console.log(error);
              res.status(400).json({
                message: "An error occured",
                status: "0",
              });
            }
          }
        } else {
          res.status(400).json({
            msg: "An error  occured",
            status: "-1",
          });
        }
      }
    );
  });

  api.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      User.findOne(
        {
          email: email,
        },
        async (err, user) => {
          if (err) {
            res.status(400).json({
              status: "0",
              error: "Login Failed! Check details and try again",
            });
            return;
          }
         if(user){
            var isPasswordMatch = await user.authenticate(email, password);
          if (isPasswordMatch) {
            await user.generateAuthToken();
            res.json({
              status: "1",
              token: user.token,
              name: user.name,
            });
          } else {
            res.status(200).json({
              status: "0",
              error: "Login Failed! Check details and try again",
            });
          }
         }else{
           res.json({
             status:"0",
             message:"Invalid credentials"
           })
         }
        }
      );
    } catch (error) {
      res.status(400).json({
        status: "-1",
        message: error,
      });
    }
  });

  api.get("/user/user_id=:uid",auth,async (req,res) => {
    User.findOne(
      {
        _id: req.params.uid,
      },
      async (err, user) => {
        if (err) {
          res.status(400).json({
            status: "-1",
            error: "Login Failed! Check details and try again",
          });
          return;
        }else{
          if(user){
            res.json({
              status:"1",
              msg:user
            })
          } else {
            res.json({
              status:"0",
              msg:"User not found"
            })
          }
        }
      }
    );
  })

  api.post("/user/passwordupdate",async (req,res) => {
    const rolename = req.body.rolename
    const permissions = roles[rolename]
    if(permissions.find(ele => ele =="passwordupdate")){
      User.findOne(
        {
          email: req.body.email,
        },
        async (err, user) => {
          if (err) {
            res.status(400).json({
              status: "-1",
              error: "Failed! Check details and try again",
            });
            return;
          }else{
            if(user){
              bcrypt.hash(req.body.updatedpassword, 10, async (err, hash) => {
                user.password = hash;
                user.save((err) => {
                  if (err) {
                    res.status(400).json({
                      message: err,
                      status: "-1",
                    });
                  } else {
                    res.status(201).json({
                      message: "password updated",
                      status: "1",
                    });
                  }
                });
              });
            } else {
              res.json({
                status:"0",
                msg:"User not found"
              })
            }
          }
        }
      );
    }else{
      res.json({
        status:"0",
        msg:"permission denied"
      })
    }
  })

  module.exports = api;