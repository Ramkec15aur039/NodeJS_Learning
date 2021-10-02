let nodemailer = require("nodemailer");

let sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ramkecauto39@gmail.com",
    pass: "Ram@9894895217",
  },
});

let composeMail = {
  from: "ramkecauto39@gmail.com",
  to: "ramakrishnakec005@gmail.com",
  subject: "Nodemailer testing",
  html: "<h1>Hellow world</h2>",
};

sender.sendMail(composeMail, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mail successfully send:", info);
  }
});
