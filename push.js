const express = require('express');
var push = require('web-push');
const bodyparser= require('body-parser')
const path = require('path');
const { runInNewContext } = require('vm');
const exp = require('constants');

const app = express();

// set static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyparser.json);


let vapidkeys={
    publicKey: 'BPArWEZiWr3R-QwLQs2KR8VY6UUmjlmgBwIh395HTSlLKEpgS-GRo_nlqiSLL72biNDumTFHlzWY3mldPYUVEJQ',
    privateKey: 'WruLAjunwite52SKUajbOMXRo-M4ktbl3KlSFvVIgCk'
}

push.setVapidDetails('mailto:deepak3dart@gmail.com',
  vapidkeys.publicKey,
  vapidkeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/exTKJS6nJNQ:APA91bG-VCAXymhuCMHMhv2iY3UdrcJRveo5aCsxnx5ptPZeumUIolvXEvzxiKBH_MrIzuyQgfmHnj270TPuhNkrI44UAXKO9bHQWXmaQRjuBCWD3cy9tRKM8yubtOx5Snw9doFlRXLB", "expirationTime": null, "keys": { "p256dh": "BMkbNdwLvDELNUjMEo2PafhgCmtvcFhXTQudC5bx5pMl0hsgaCLG8pLIzvo3j0l3TMhTKhHn3BwLNyB7qe9k5u4", "auth": "c5yo7KD3yVA2Mmh6JfECSQ" } };

push.sendNotification(sub, 'test message 1')
/*
//Subscribe Route
app.post('/subscribe', (req, res) => {
// get push subscription object
  const subscription = req.body;
// send 201 - resource created
  res.status(201).json({});
// create payload
  const payload = JSON.stringify({ title: 'Push Test' });

  // pass object
  push.sendNotification(subscription, payload).catch(err => console.error(err));


})
  //const port = 5000;
  //app.listen(port, () => console.log(`server started on port ${port}`));*/