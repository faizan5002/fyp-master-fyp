const { createTransport } = require("nodemailer");
const sendEmail = async (email, text, subject) => {
  // create reusable transporter object using the default SMTP transport
  var transport = createTransport({
    service : "gmail",
    host: "smtp.gmail.com",
    secure : false,
    auth: {
      user: "mongod62@gmail.com",
      pass: "dcrxvxnjyjtjvpni",
    },
  });
  // send mail with defined transport object
  await transport.sendMail({
    to: email, // receiver's email
    subject: subject, // Subject line
    text: text, // plain text body
  });
};

module.exports = sendEmail;
