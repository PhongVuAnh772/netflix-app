const db = require("../models/index");

const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const signup = (req, res) => {
  db.Account.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUser) => {
    if (dbUser) {
      return res.status(200).json({ message: "Úser is valid" });
    } else if (!req.body.password) {
      return res.status(200).json({ message: "password not provided" });
    } else if (!req.body.email) {
      return res.status(200).json({ message: "email not provided" });
    } else if (!req.body.user_name) {
      return res.status(200).json({ message: "name not provided" });
    } else {
      bcryptjs.hash(req.body.password, 12, (err, passwordHash) => {
        if (err) {
          return res.status(200).json({ message: 'Couldn"t hash password' });
        } else if (passwordHash) {
          db.Account.create({
            email: req.body.email,
            user_name: req.body.user_name,
            password: passwordHash,
          })
            .then(() => {
              return res.status(200).json({
                success: true,
                message: "Success, user created",
              });
            })
            .catch((err) => {
              console.error(err);
              return res.status(502).json({
                success: false,
                message: "error while creating the user",
              });
            });
        }
      });
    }
  });
};

const login = (req, res) => {
  db.Account.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((account) => {
      if (!account) {
        return res.status(200).json({
          message: "Account not found",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          account.password,
          (err, compareRes) => {
            if (err) {
              return res
                .status(200)
                .json({ message: "Error while checking password" });
            } else if (compareRes) {
              const token = jwt.sign({ email: req.body.email }, "secret", {
                expiresIn: "1h",
              });
              return res
                .status(200)
                .json({ token: token, message: "User Logged in successfully" });
            } else {
              return res.status(200).json({ message: "invalid credentials" });
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const isAuth = (req, res) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "not authenticated" });
  }
  const token = authHeader.split(" ")[1];
  console.log("token: " + token);
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (err) {
    return res
      .status(200)
      .json({ message: err.message || "could not decode the token" });
  }
  if (!decodedToken) {
    return res.status(200).json({ message: "unauthorized" });
  } else {
    return res.status(200).json({ message: "here is your resource" });
  }
};

module.exports = {
  signup,
  login,
  isAuth,
};
