document.write('<input type="button" id="Button_webserial_open" style="z-index:999" value="選擇序列埠">');


let serial_buttonRequest = document.getElementById('Button_webserial_open'); //儲存button回傳的值

serial_buttonRequest.addEventListener('click', async () => {startSerial();});

async function startSerial() {
    try{
        console.log("INFO: Start to connect...");
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 }); //wait baudrate data,or jump to catch
    }
    catch(error){
        console.log("ERRORR:Port is not open");
        console.log(error); //DOMException: Failed to open serial port.
    }
}


function serial_message(msg) {
	serial_status.innerText = msg;
}

