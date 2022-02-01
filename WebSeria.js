document.write('<input type="button" id="startSerial" style="z-index:999" value="Select Port">');

let stopFlag = false;
        async function startSerial() {
        // function startSerial() {
            try {
                console.log("INFO: 接続が確立しました");
                stopFlag = false;
                const port = await navigator.serial.requestPort();
                // const port =  navigator.serial.requestPort();
                await port.open({ baudRate: 115200 }); //wait baudrate data,or tun to catch
                // port.open({ baudRate: 115200 });
                while (port.readable) {
                    const reader = port.readable.getReader();
                    try {
                        while (!stopFlag) {
                            const { value, done } = await reader.read();
                            // const { value, done } = reader.read();
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
