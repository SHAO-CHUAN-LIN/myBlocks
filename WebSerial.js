document.write('<input type="button" id="Button_webserial_open" style="z-index:999" value="選擇序列埠">');
document.write('<input type="button" id="Button_webserial_close" style="z-index:999" value="關閉序列埠">');


let serial_buttonRequest = document.getElementById('Button_webserial_open'); //儲存button回傳的值
let serial_buttonClose = document.getElementById('Button_webserial_close');

serial_buttonRequest.addEventListener('click', async () => {startSerial();});

let stopFlag = false;
async function startSerial() {
    try {
        console.log("INFO: Start to connect...");
        stopFlag = false;
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 }); //wait baudrate data,or jump to catch
//         while (port.readable) {
//             const reader = port.readable.getReader();
//             try {
//                 while (!stopFlag) {
//                     const { value, done } = await reader.read();
//                     if (done) {
//                         console.log("INFO: 読込モード終了");
//                         break;
//                     }
//                     //👇生データはバイナリなので、ユニコード文字へデコード
//                     const inputValue = new TextDecoder().decode(value);
//                     console.log(inputValue);
//                 }
//             } catch (error) {
//                 console.log("ERROR: 読み出し失敗");
//                 console.log(error);
//             } finally {
//                 reader.releaseLock();
//                 await port.close();
//                 console.log("INFO: 接続を切断しました");
//             }
//         }
    }
	catch (error) {
        console.log("ERRORR:Port is not open");
        console.log(error); //DOMException: Failed to open serial port.
    }
}


function serial_message(msg) {
	serial_status.innerText = msg;
}
