const functions = require('firebase-functions');

const sg = require('sendgrid')(
  process.env.SENDGRID_API_KEY || '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'
);

// exports.sendmail = functions.https.onRequest((req, res) => {
module.exports = ((req,res) => {
  sendMail(req.body);
  res.send("Mail Successfully Sent!");
});

function sendMail(formData) {
  const mailRequest = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [{
        to: [{ email: `${formData.email}` }],
        subject: 'SMARTest Results'
      }],
      from: { email: 'smartestappcolumbia@smartest-df9af.firebaseapp.com' },
      content: [{
        type: 'text/html',
        value: `HIV: ${formData.hiv}\nSyphilis: ${formData.syphilis}\n\nTest Date: ${formData.date}\nID: ${formData.id}\n(This ID can be used to verify the sender of the message) \n\nPLEASE DO NOT REPLY TO THIS MESSAGE. THIS IS A SEND ONLY NUMBER`,
      }]
    }
  });

  sg.API(mailRequest, (error, response) => {
    if (error) {
      return res.status(422).send(err);
    } else {
      return res.status(200).send('Mail Sent Successfully');
    }
  });
}