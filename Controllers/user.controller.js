// External Import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Internal Import
const userModel = require("../Models/user.js");
const sendMail = require("../Utils/sendMail.js");
const uniqueString = require("../Utils/uniqueString.js")

// User View
const userView = (userType) => {
  return async (req, res) => {
    try {
      const existUser = await userModel.findOne({
        _id: req.userID,
        role: userType,
        active: true,
        verified: true,
      });
      if (existUser) {
        let sendableUser = existUser;
        sendableUser["password"] = "";
        sendableUser["randString"] = "";
        res.status(200).json({
          result: sendableUser,
          msg: "Successfully Viewed User Profile",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Register
const userRegister = (userType) => {
  return async (req, res) => {
    try {
      const existUser = await userModel.findOne({
        $or: [{ username: req.body.username }, { email: req.body.email }],
        role: userType,
      });
      if (!existUser) {
        const hashedPass = await bcrypt.hash(req.body.password, 5);
        const randString = uniqueString();
        const newUser = await userModel({
          ...req.body,
          randString: randString,
          password: hashedPass,
          role: userType,
        });
        await newUser.save();
        sendMail(
          req.body.email,
          randString,
          req.body.username,
          "signup",
          userType
        );
        res.status(200).json({
          msg:
            `Successfully Registered As A ${userType}. Please Check Your Email for further details. Also please check your spam box.`,
        });
      } else {
        res.status(200).json({
          msg: "Already Registered",
        });
      }
    } catch (err) {
      res.status(500).json({
        msg: "Server Error",
        err: err
      });
    }
  }
};

// User Login
const userLogin = (userType) => {
  return async (req, res) => {
    // console.log(req.body)
    try {
      const existUser = await userModel.findOne({
        $or: [
          { username: req.body.usernameOrEmail },
          { email: req.body.usernameOrEmail }
        ],
        verified: true,
        active: true,
        role: userType,
      });
      if (existUser) {
        const isValidPass = await bcrypt.compare(
          req.body.password,
          existUser.password
        );
        if (isValidPass) {
          const token = jwt.sign(
            {
              username: existUser.username,
              userID: existUser._id,
              userRole: existUser.role,
            },
            process.env.JWT_TOKEN,
            {
              expiresIn: "15d",
            }
          );
          res.status(200).json({
            token: token,
            msg: "Succesfully Logged In",
          });
        } else {
          res.status(200).json({
            msg: "Auth Error",
          });
        }
      } else {
        res.status(200).json({
          msg: "User Not Found",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Email Verify
const userEmailVerify = (userType) => {
  return async (req, res) => {
    try {
      const { username, randString } = req.params;
      const existUser = await userModel.findOne({
        username: username,
        randString: randString,
        role: userType,
      });
      const existUserAlreadyVerified = await userModel.findOne({
        username: username,
        role: userType,
      });
      if (
        existUserAlreadyVerified &&
        existUserAlreadyVerified.verified == true
      ) {
        res.status(200).json({
          msg: "Congratulation! Your email is already Verified.",
        });
      } else if (existUser) {
        await userModel.updateOne(
          { randString: randString, role: userType },
          { $set: { verified: true, active: true, randString: uniqueString() } }
        );
        res.status(200).json({
          msg: "Successfully Verified Email",
        });
      } else {
        res.status(200).json({
          msg:
            "Wrong Verify Token Or UserID. Please Check your mail and try again.",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Update User
// const userUpdate = async (req, res, userType) => {
//   try {
//     const existUser = await userModel.findOne({
//       _id: req.userID,
//       role: userType,
//     });
//     if (existUser) {
//       if (
//         existUser.phone == req.body.phone ||
//         existUser.facebook == req.body.phone
//       ) {
//         res.status(200).json({
//           msg: "Facebook ID & Phone Has To Be Unique",
//         });
//       } else {
//         await userModel.updateOne(
//           { _id: req.userID, role: userType },
//           {
//             $set: { ...req.body, updated_at: Date.now() },
//             $push: {
//               notifications: {
//                 text: "Successfully updated your profile.",
//                 status: "unread",
//               },
//             },
//           }
//         );
//         res.status(200).json({
//           msg: "Succesfully Updated User",
//         });
//       }
//     } else {
//       res.status(200).json({
//         msg: "User Not Found",
//       });
//     }
//   } catch (err) {
//     // console.log(err)
//     res.status(500).json({
//       msg: "Server Error",
//     });
//   }
// };


// User Change Password
const userPassChange = (userType) => {
  return async (req, res) => {
    try {
      const existUser = await userModel.findOne({
        _id: req.userID,
        role: userType,
      });
      if (existUser) {
        const isOldPassword = await bcrypt.compare(
          req.body.oldPassword,
          existUser.password
        );
        if (isOldPassword) {
          const newHashedPass = await bcrypt.hash(req.body.newPassword, 5);
          await userModel.updateOne(
            { _id: req.userID, role: userType },
            {
              $set: {
                password: newHashedPass,
              },
            }
          );
          res.status(200).json({
            msg: "Succesfully Changed Password",
          });
        } else {
          res.status(200).json({
            msg: "Did not matched your old password",
          });
        }
      } else {
        res.status(200).json({
          msg: "User Not Found",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Forgot Password
const userForgotPassword = (userType) => {
  return async (req, res) => {
    try {
      const existUser = await userModel.findOne({
        email: req.body.email,
        role: userType,
      });
      if (existUser) {
        const randString = uniqueString();
        await userModel.updateOne(
          { _id: existUser._id, role: userType },
          { $set: { randString: randString } }
        );
        sendMail(
          existUser.email,
          randString,
          existUser.username,
          "resetPass",
          userType
        );
        res.status(200).json({
          msg: "Pleace Check Your Email For Details. Also check your spam box.",
        });
      } else {
        res.status(200).json({
          msg: "User Not Found",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Valid Randing Check
const userRandStringCheck = (userType) => {
  return async (req, res) => {
    // console.log(req.params)
    try {
      const { randString } = req.params;
      const existUser = await userModel.findOne({
        randString: randString,
        role: userType,
      });
      if (existUser) {
        res.status(200).json({
          msg: "Correct Random String",
        });
      } else {
        res.status(200).json({
          msg: "Wrong Token :3",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Reset Password
const userResetPassword = (userType) => {
  return async (req, res) => {
    try {
      const { randString } = req.params;
      const existUser = await userModel.findOne({
        randString: randString,
        role: userType,
      });
      // console.log(req.body)
      if (existUser) {
        const hashedPass = await bcrypt.hash(req.body.newPassword, 5);
        await userModel.updateOne(
          { randString: randString, role: userType },
          {
            $set: {
              password: hashedPass,
              randString: uniqueString(),
            },
          }
        );
        res.status(200).json({
          msg: "Succesfully Reset Password",
        });
      } else {
        res.status(200).json({
          msg: "Wrong Token :3",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

// User Delete
const userDelete = (userType) => {
  return async (req, res) => {
    try {
      const existUser = await userModel.findOne({
        _id: req.userID,
        role: userType,
      });
      if (existUser) {
        const passwordMatched = await bcrypt.compare(
          req.body.password,
          existUser.password
        );
        if (passwordMatched) {
          await userModel.deleteOne({ _id: req.userID, role: userType });
          res.status(200).json({
            msg: "Succesfully Deleted User",
          });
        } else {
          res.status(200).json({
            msg: "Wrong Password",
          });
        }
      } else {
        res.status(200).json({
          msg: "User Not Found",
        });
      }
    } catch (err) {
      // console.log(err)
      res.status(500).json({
        msg: "Server Error",
      });
    }
  };
}

module.exports = { userView, userRegister, userLogin, userEmailVerify, userPassChange, userForgotPassword, userRandStringCheck, userResetPassword, userDelete };

