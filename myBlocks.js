+(function (window, document) {

  'use strict';
	let serial_baud = document.getElementById('serial_baud');
	let serial_text = document.getElementById('serial_text');
	let serial_uint8 = document.getElementById('serial_uint8');
	let serial_data = document.getElementById('serial_data');
	let serial_status = document.getElementById('serial_status');
	let serial_state = document.getElementById('serial_state');
	let serial_buttonRequest = document.getElementById('button_webserial_open');
	let serial_sendText = document.getElementById('serial_sendText');
	let serial_sendUint8 = document.getElementById('serial_sendUint8');
	let serial_clearText = document.getElementById('serial_clearText');	
	let serial_end = document.getElementById('serial_end');
	
	function webserial_get_serialport(input_status, input_select) {
// 		if (document.getElementById(input_serialportstatus)) {
// 		var serialport_status = document.getElementById(input_serialportstatus);
// 			if (serialport_status == "open")
			document.getElementById(input_status).style.display = input_select;
// 				document.getElementById(input_serialportstatus).addEventListener('click', async () => {startSerial();});
// 		}
	}
	
// 	function robofly_unlock_command(input_lock_status) {
// 		serial_uint8.value = input_lock_status;
// 		serial_sendUint8.click();
// 	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
