document.write('<input type="button" id="gamebutton_webserial_open" style="z-index:999" value="Select Port">');

let serial_buttonRequest = document.getElementById('gamebutton_webserial_open');


serial_buttonRequest.addEventListener('click', async () => {startSerial();});

let stopFlag = false;
        async function startSerial() {
            try {
                console.log("INFO: 接続が確立しました");
                stopFlag = false;
                const port = await navigator.serial.requestPort();
                // const port =  navigator.serial.requestPort();
                await port.open({ baudRate: 115200 }); //wait baudrate data,or tun to catch
                while (port.readable) {
                    const reader = port.readable.getReader();
                    try {
                        while (!stopFlag) {
                            const { value, done } = await reader.read();
                            if (done) {
                                console.log("INFO: 読込モード終了");
                                break;
                            }
                            //👇生データはバイナリなので、ユニコード文字へデコード
                            const inputValue = new TextDecoder().decode(value);
                            console.log(inputValue);
                        }
                    } catch (error) {
                        console.log("ERROR: 読み出し失敗");
                        console.log(error);
                    } finally {
                        reader.releaseLock();
                        await port.close();
                        console.log("INFO: 接続を切断しました");
                    }
                }
            } catch (error) {
                console.log("ERRORR:ポートが開けません");
                console.log(error); //DOMException: Failed to open serial port.
            }
        }
        function stopSerial() {
            stopFlag = true;
            // reader.releaseLock();
            // await port.close();
            // console.log("INFO: 接続を切断しました");
        }

function serial_message(msg) {
	serial_status.innerText = msg;
}
