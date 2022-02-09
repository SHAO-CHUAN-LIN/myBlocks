+(function (window, document) {

  'use strict';
  let serial_uint8 = document.getElementById('serial_uint8');
  let serial_sendUint8 = document.getElementById('serial_sendUint8');
	
	function webserial_get_serialport(input_serialportstatus) {
		if (document.getElementById(input_serialportstatus)) {
			if (input_button=="open")
				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});
		}
	}
	
	function robofly_unlock_command(input_cmd) {
		serial_uint8.value = input_cmd;
		serial_sendUint8.click();
	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
