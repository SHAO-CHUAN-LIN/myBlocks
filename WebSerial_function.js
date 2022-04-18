document.write('<input type="button" id="button_webserial_open" style="display:none;z-index:999" value="選擇序列埠">');
document.write('<input type="button" id="button_webserial_close" style="display:none;z-index:999" value="關閉序列埠">');
document.write('<input type="textarea" id="serial_textarea" style="display:none;position:absolute;z-index:auto"; rows="100"; cols="33" value="等待連線...">');

let serial_buttonRequest = document.getElementById('button_webserial_open');
let serial_buttonClose = document.getElementById('button_webserial_close');

let port = null;
let port_info = null;
let info = null;


navigator.serial.addEventListener("connect", () => {
	serial_message("Device connect");
	console.log("Device connect");
});

navigator.serial.addEventListener("disconnect", () => {
	console.log("Device disconnect");
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
	    info = port.getInfo();
	    console.log(port_info);
	    console.log(info);
	    if(port_info){
// 		    console.log("連線成功");
		    document.getElementById('button_webserial_open').style.display = "none";
		    document.getElementById('demo-area-01-show').innerHTML = "連線成功！";
		    document.getElementById('serial_textarea').value = "open";
	    }
    }
    catch(error){
	    document.getElementById('demo-area-01-show').innerHTML = "連線失敗，請重新連線！";
	    console.log("ERRORR:Port is not open");
	    console.log(error); //DOMException: Failed to open serial port.
    }
}


serial_buttonClose.addEventListener('click', async () => {closeSerial();});
async function closeSerial(){
	try{
		port.close();
		port = null;
// 		console.log("斷開連線");
		document.getElementById('button_webserial_close').style.display = "none";
		document.getElementById('demo-area-01-show').innerHTML = "等待連線...";
		document.getElementById('serial_textarea').value = "等待連線...";

	}
	catch(error){
		console.log(error);
	}
}

//async function webserial_status(){
function webserial_status(){
// 	var serial_textarea = (document.getElementById('serial_textarea').value).toString();
// 	var serial_textarea = document.getElementById('serial_textarea').value;
// 	var serial_textarea = serial_textarea.toString();
// 	console.log(typeof serial_textarea);
// 	console.log(serial_textarea);
	if(serial_textarea.innerText == "open")
		return true;
	else
		return false;
// 	return (serial_textarea.innerText == "open")?true:false;
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

async function delay_time(time){
// 	time = time * 1000;
	while(time > 0)
	{
// 		time_ms = time / 1000;
// 		delay(time_ms);		
		send_data(0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8); 
		await delay(time);
		time = time - 1;
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

