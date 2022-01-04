+(function (window) {

  'use strict';

  function enableWebBluetooth() {
    return new Promise(function (resolve, reject) {
      window.swal("Enable Web Bluetooth?").then(function (value) {
        value ? resolve(value) : reject();
      });
    });
  }

  window.enableWebBluetooth = enableWebBluetooth;

}(window));
