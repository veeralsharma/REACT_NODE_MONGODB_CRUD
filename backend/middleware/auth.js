const jwt = require("jsonwebtoken");
const User = require(".././models/userSchema");

const auth = async (req, res, next) => {
  var token;
  if (req.header("Authorization") || req.header("authorization")) {
    token = req.header("Authorization") || req.header("authorization");
  }
  // console.log(token);
  if (token) {
    const data = jwt.verify(
      token,
      process.env.JWT_SECRET || "SECRETBOY",
      async (err, decoded) => {
        if (err) {
          console.log(err);
          console.log("invalid token");
          res
            .status(401)
            .send({
              status: "401",
              error: "Not authorized to access this resource",
            });
          return;
        } else {
          try {
            const user = await User.findOne({ _id: decoded._id, token: token });
            if (!user) {
              console.log("NO user found");
              res
                .status(401)
                .send({
                  status: "401",
                  error: "Not authorized to access this resource",
                });
              return;
            } else {
              req.user = user.email;
              req.body.email = user.email;
              req.token = token;
              next();
            }
          } catch (error) {
            console.log(error);
            console.log("general error");
            res
              .status(401)
              .send({
                status: "401",
                error: "Not authorized to access this resource",
              });
            return;
          }
        }
      }
    );
  } else {
    console.log("Token not found");
    res.status(401).send({ error: "Not authorized to access this resource" });
    return;
  }
};

module.exports = auth;
