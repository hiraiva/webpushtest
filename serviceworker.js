;(function() {
  var serviceWorkerApp = {
    onReceive: function(event) {
      if (serviceWorkerApp.isSupported()) {
        var promise = fetch("https://hiraiva.github.io/webpushtest/message.txt", {
          mode: "cors",
          credentials: "include"
        }).then(function(response) {
          return response.text();
        }).then(function(message) {
          self.registration.showNotification("WebPushTest", {
            icon: "logo.jpg",
            body: message,
            vibrate: [400, 100, 400]
          });
        });
        event.waitUntil(promise);
      } else {
        console.log("Not supported...");
      }
    },
    isSupported: function() {
      return self && self.registration && self.registration.showNotification;
    }
  }
  self.addEventListener("push", serviceWorkerApp.onReceive, false);
})();
