const userModel = require("../model/userModel");

//Register
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //validation
    if (!username || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All fields",
      });
    }
    //check existing uer
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exits",
      });
    }
    //save User
    const newUser = new userModel({ username, email, password });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User registered Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Register API",
      error,
    });
  }
};

//Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Find user
    const user = await userModel.findOne({ email, password });
    //Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Username or Password",
      });
    }
    res.status(200).send({
      success: true,
      message: "User login Successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "login API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
