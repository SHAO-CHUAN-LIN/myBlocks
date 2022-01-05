+(function (window, document) {

  'use strict';

  function test() {
    let device = await navigator.bluetooth.requestDevice(
      {
        filters:
        [ 
            { namePrefix: 'HC' } 
        ],
        optionalServices: [ 0xff0f ]
      });
    let server = await device.gatt.connect();
    let service = await server.getPrimaryService(0xff0f);
    let characteristic = await service.getCharacteristic(0xfffc);
    
    characteristic.writeValue(parseInt('24 4D 3C 10 C8 DC 05 DC 05 D0 07 E8 03 DC 05 DC 05 DC 05 DC 05 E4',16) );
    
  }

  window.test = test;

}(window, window.document));
