import { google } from "googleapis"
import nodemailer from "nodemailer"
import emailFormat from "./emailFormat.js"

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID
const CLEINT_SECRET = process.env.CLEINT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

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
        user: 'umcdev9@gmail.com',
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
        title = "Verify Your UMC Account"
        htmlMail = emailFormat(username, title, url)
      }
      else {
        url = `${process.env.CLIENT_DOMAIN}/student/verify/${username}/${randString}`
        title = "Verify Your UMC Account"
        htmlMail = emailFormat(username, title, url)
      }
    } else {
      if (role == "admin") {
        const url = `${process.env.ADMIN_DOMAIN}/admin/reset/${username}/${randString}`
        title = "Reset Your UMC Password"
        htmlMail = emailFormat(username, title, url)
      }
      else{
        const url = `${process.env.CLIENT_DOMAIN}/student/reset/${username}/${randString}`
        title = "Reset Your UMC Password"
        htmlMail = emailFormat(username, title, url)
      }

    }

    var mailOptions = {
      from: "UMC | Uzzal Math Club",
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

export default sendMail
