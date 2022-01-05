+(function (window, document) {

  'use strict';

  function OpenPort() {
    document.querySelector('button').addEventListener('click', async () => 
      {
        // Prompt user to select any serial port.
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });
      });
    
  function SendData(string){
      const writer = port.writable.getWriter();
      const data = new Uint8Array([104, 101, 108, 108, 111]); // hello
      await writer.write(data);
    
      //通過TextEncoderStream管道將文本發送到設備port.writable
      const textEncoder = new TextEncoderStream();
      const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
      const writer = textEncoder.writable.getWriter();
      await writer.write("hello");
    
      await port.close();
    }

  window.openport = OpenPort;
  window.SendData = SendData;

}(window, window.document));
