document.write('<input type="button" id="button_webserial_open" style="display:none;z-index:999" value="選擇序列埠">');
document.write('<input type="button" id="button_webserial_close" style="display:none;z-index:999" value="關閉序列埠">');
document.write('<input type="text" id="serial_uint8" style="position:absolute;display:none;z-index:999">');
document.write('<button id="serial_sendUint8" style="position:absolute;display:none;z-index:999">Send Uint8Array</button>');

let serial_buttonRequest = document.getElementById('button_webserial_open');
let serial_buttonClose = document.getElementById('button_webserial_close');
// let serial_uint8 = document.getElementById('serial_uint8');
// let serial_send_data = document.getElementById('serial_sendUint8');

let port = null;


serial_buttonRequest.addEventListener('click', async () => {startSerial();});
async function startSerial() {
// 	const filters = [];
// 	const port = await navigator.serial.requestPort({ filters }); //filter device
// 	const { usbProductId, usbVendorId } = port.getInfo(); //remind user select device
	
    try{
        console.log("INFO: Start to connect...");
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 }); //wait baudrate data,or jump to catch
    }
    catch(error){
        console.log("ERRORR:Port is not open");
        console.log(error); //DOMException: Failed to open serial port.
    }
}


serial_buttonClose.addEventListener('click', async () => {closeSerial();});
async function closeSerial(){
	try{
		await port.close();
		await port = null;
	}
	catch(error){
		console.log("ERRORR:Port is not open");
		console.log(error);
	}

}


// serial_send_data.addEventListener('click', async () => {send_data();});
async function send_data(command) {
    try{
	    var intArray = command.split(","); 
// 	    data = String.fromCharCode.apply(null, intArray);
	    
	    const writer = port.writable.getWriter();
	    const data = new Uint16Array(intArray);
	    await writer.write(data);
	    writer.releaseLock();
    }
    catch(error){
	    console.log(error);
    }
}

// function robotfly_status() {
// 	function robofly_unlock_command(input_lock_status) {
// 		const lock_status = document.getElementById(input_lock_status);
// 		if (lock_status =="unlock")
// 			var status = "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4";
// 		else if (lock_status =="lock")
// 			var status = "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8";
// 		return status;
// 	}
// };

function serial_message(msg) {
	serial_status.innerText = msg;
}

