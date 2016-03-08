var serviceWorkerApp = {
  onReceive: function(event) {
    if (serviceWorkerApp.isSupported()) {
      var messege = (event && event.data) ? event.data.text() : "No data!!!!";
      evt.waitUntil(serviceWorkerApp.showFunc(message));
    } else {
      console.log("Not supported...");
    }
  },
  showFunc: function(payload) {
    return self.registration.showNotification("WebPushTest", {
      icon: "optlogo.gif",
      body: body ? unescape(body) : "(with empty payload)",
      vibrate: [400, 100, 400]
    });
  },
  isSupported: function() {
    return self && self.registration && self.registration.showNotification;
  }
}
self.addEventListener("push", serviceWorkerApp.onReceive, false);
