self.addEventListener('push',()=>{
    self.ServiceWorkerRegistration.sendNotification('test message 2.',{});
});
