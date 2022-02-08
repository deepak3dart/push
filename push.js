var push =require('web-push');

let vapidkeys={
    publicKey: 'BPArWEZiWr3R-QwLQs2KR8VY6UUmjlmgBwIh395HTSlLKEpgS-GRo_nlqiSLL72biNDumTFHlzWY3mldPYUVEJQ',
    privateKey: 'WruLAjunwite52SKUajbOMXRo-M4ktbl3KlSFvVIgCk'
}

push.setVapidDetails('mailto:deepak3dart@gmail.com',
  vapidkeys.publicKey,
  vapidkeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/exTKJS6nJNQ:APA91bG-VCAXymhuCMHMhv2iY3UdrcJRveo5aCsxnx5ptPZeumUIolvXEvzxiKBH_MrIzuyQgfmHnj270TPuhNkrI44UAXKO9bHQWXmaQRjuBCWD3cy9tRKM8yubtOx5Snw9doFlRXLB", "expirationTime": null, "keys": { "p256dh": "BMkbNdwLvDELNUjMEo2PafhgCmtvcFhXTQudC5bx5pMl0hsgaCLG8pLIzvo3j0l3TMhTKhHn3BwLNyB7qe9k5u4", "auth": "c5yo7KD3yVA2Mmh6JfECSQ" } };

push.sendNotification(sub,'test message 1')