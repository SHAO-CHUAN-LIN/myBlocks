document.write('<input type="button" id="button_webserial_open" style="display:none;z-index:999" value="選擇序列埠">');


let serial_buttonRequest = document.getElementById('button_webserial_open'); //儲存button回傳的值

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

function robotfly_basic(lock_status) {
	  if (lock_status =="unlock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4";
	  else if (lock_status =="lock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8"
	  else	
		return "";
	};

function serial_message(msg) {
	serial_status.innerText = msg;
}

