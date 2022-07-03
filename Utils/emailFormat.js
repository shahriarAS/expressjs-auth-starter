const emailFormat = (username, title, url) => {
    return (
        `<html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <meta name="format-detection" content="telephone=no" />
  
    <style>
      /* Reset styles */
      body {
        margin: 0;
        padding: 0;
        min-width: 100%;
        width: 100% !important;
        height: 100% !important;
      }
  
      body,
      table,
      td,
      div,
      p,
      a {
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        line-height: 100%;
      }
  
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse !important;
        border-spacing: 0;
      }
  
      img {
        border: 0;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      #outlook a {
        padding: 0;
      }
  
      .ReadMsgBody {
        width: 100%;
      }
  
      .ExternalClass {
        width: 100%;
      }
  
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
  
      @media all and (min-width: 560px) {
        body {
          margin-top: 30px;
        }
      }
      
      /* Rounded corners */
      @media all and (min-width: 560px) {
        .container {
          border-radius: 8px;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          -khtml-border-radius: 8px;
        }
      }
      /* Links */
      a,
      a:hover {
        color: #127DB3;
      }
  
      .footer a,
      .footer a:hover {
        color: #999999;
      }
    </style>
    <title>${title}</title>
  
  </head>
  
  <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0;  padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
      background-color: #F0F0F0;
      color: #000000;" bgcolor="#F0F0F0" text="#000000">
    <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background">
      <tr>
        <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#F0F0F0">
          <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
      max-width: 560px;" class="container">
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
              padding-top: 25px;
              color: #000000;
              font-family: sans-serif;" class="header">
                <h4 style="margin: 0;">ExpressJS Auth Starter</h4>
                <p>ExpressJS Auth Starter</p>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
              padding-top: 25px;" class="line">
                <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
              padding-top: 25px; 
              color: #000000;
              font-family: sans-serif;" class="paragraph">
                Hi ${username},<br> In order to start using your new account, you need to confirm your email address.
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
              padding-top: 25px;
              padding-bottom: 5px;" class="button">
                <a href="${url}" target="_blank" style="text-decoration: none;">
                  <table border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                    <tr>
                      <td align="center" valign="middle" style="padding: 12px 24px; margin: 0; text-decoration: none; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                          bgcolor="#3969d5"><a target="_blank" style="text-decoration: none;
                      color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;" href="${url}">
                          ${title}
                      </a>
                      </td>
                    </tr>
                  </table>
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
              padding-top: 25px;" class="line">
                <hr color="#E0E0E0" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
              </td>
            </tr>
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
              padding-top: 20px;
              padding-bottom: 25px;
              color: #000000;
              font-family: sans-serif;" class="paragraph">
                If you don't know about the incident you can ignore this email.
              </td>
            </tr>
          </table>
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
      max-width: 560px;" class="wrapper">
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
              padding-top: 20px;
              padding-bottom: 20px;
              color: #999999;
              font-family: sans-serif;" class="footer">
              ExpressJS Auth Starter
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`
    )
}

module.exports = emailFormat