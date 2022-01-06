+(function (window, document) {

  'use strict';

  function OpenPort() {
    document.querySelector('button').addEventListener('click', async () => 
      {
        // Prompt user to select any serial port.
        const port = await navigator.serial.requestPort(); // Prompt user to select any serial port. //提示用戶選擇一個串列埠
        const ports = await navigator.serial.getPorts();// 獲取用戶之前授予網站訪問權限的所有串列埠
        await port.open({ baudRate: 115200 }); //等待串列埠連接，並已指定baud rate打開
      });
    
  function drone_unlock(string){
      const writer = port.writable.getWriter();
      const data = new Uint8Array(string); 
      await writer.write(data);
    
      //通過TextEncoderStream管道將文本發送到設備port.writable
      const textEncoder = new TextEncoderStream();
      const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
      const writer = textEncoder.writable.getWriter();
      await writer.write("hello");
    
      await port.close();
    }

  window.OpenPort = OpenPort;
  window.drone_unlock = drone_unlock;

}(window, window.document));
