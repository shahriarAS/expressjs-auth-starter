const google = require("googleapis").google;
const nodemailer = require("nodemailer");
const emailFormat = require("./emailFormat.js");

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLEINT_SECRET = process.env.CLEINT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (email, randString, username, verifyFor, role) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    var transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        type: 'OAuth2',
        user: ADMIN_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      }
    })

    let htmlMail = ""
    let url = ""
    let title = ""

    if (verifyFor == "signup") {
      if (role == "admin") {
        url = `${process.env.ADMIN_DOMAIN}/admin/verify/${username}/${randString}`
        title = "Verify Your Account"
        htmlMail = emailFormat(username, title, url)
      }
      else {
        url = `${process.env.CLIENT_DOMAIN}/customer/verify/${username}/${randString}`
        title = "Verify Your Account"
        htmlMail = emailFormat(username, title, url)
      }
    } else {
      if (role == "admin") {
        const url = `${process.env.ADMIN_DOMAIN}/admin/reset/${username}/${randString}`
        title = "Reset Your Password"
        htmlMail = emailFormat(username, title, url)
      }
      else{
        const url = `${process.env.CLIENT_DOMAIN}/customer/reset/${username}/${randString}`
        title = "Reset Your Password"
        htmlMail = emailFormat(username, title, url)
      }

    }

    var mailOptions = {
      from: "| Express Auth Starter",
      to: email,
      subject: title,
      html: htmlMail
    }

    transport.sendMail(mailOptions, function (err, resp) {
      if (err) {
        // console.log(err)
      } else {
        // console.log("Message Sent", resp)
      }
    })
  }
  catch (err) {
    // console.log(err)
  }
}

module.exports = sendMail