document.write('<input type="button" id="button_webserial_open" style="display:none;z-index:999" value="選擇序列埠">');
document.write('<input type="button" id="button_webserial_close" style="display:none;z-index:999" value="關閉序列埠">');
document.write('<input type="textarea" id="serial_text" style="position:absolute;width=100%;z-index:999" rows="100" cols="33">');
document.write('<span id="serial_status" style="position:absolute;display:none" style="position:absolute;z-index:999"></span>');

let serial_buttonRequest = document.getElementById('button_webserial_open');
let serial_buttonClose = document.getElementById('button_webserial_close');
let serial_status = document.getElementById('serial_status');


let port = null;
let port_info = null;


navigator.serial.addEventListener("connect", () => {
	serial_message("Device connect");
});

navigator.serial.addEventListener("disconnect", () => {
	console.log("斷開連線");
});


serial_buttonRequest.addEventListener('click', async () => {startSerial();});
async function startSerial() {
	const filters = [];
// 	const port = await navigator.serial.requestPort({ filters });
// 	const { usbProductId, usbVendorId } = port.getInfo();
	
    try{
	    console.log("INFO: Start to connect...");
	    port = await navigator.serial.requestPort();
	    await port.open({ baudRate: 115200 });
	    port_info = await navigator.serial.getPorts();
	    console.log(port_info);
	    if(port_info == true){
		    console.log("連線成功");
	    }
    }
    catch(error){
	    console.log("ERRORR:Port is not open");
	    console.log(error); //DOMException: Failed to open serial port.
    }
}


serial_buttonClose.addEventListener('click', async () => {closeSerial();});
async function closeSerial(){
	try{
		port.close();
		port = null;
	}
	catch(error){
		console.log(error);
	}
}



// serial_send_data.addEventListener('click', async () => {send_data();});
async function send_data(command) {
    try{
	    var intArray = command.split(","); 
	    var data = String.fromCharCode.apply(null, intArray);
	    
	    const writer = port.writable.getWriter();
	    const ascii_data = new Uint8Array(intArray);
	    console.log(ascii_data);
	    await writer.write(ascii_data);
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

