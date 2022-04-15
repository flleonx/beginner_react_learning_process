const { response } = require("express");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const User = require("../models/User");

const createUser = async (req, res = response) => {

  const { email, password } = req.body;

  try {

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "There is already a user with that email"
      });
    }

    user = new User(req.body);

    // Password encryption
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please talk with the admin",
    });
  }
};

const loginUser = async (req, res = response) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Use a more generic msg
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "There is no user with that email"
      });
    };

    // Validate password
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Wrong password"
      });
    };

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please talk with the admin",
    });
  }

};

const renewToken = async (req, res = response) => {

  const { uid, name } = req;

  // Generate JWT
  const token = await generateJWT(uid, name);

  return res.status(200).json({
    ok: true,
    uid,
    name,
    token
  });

};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
