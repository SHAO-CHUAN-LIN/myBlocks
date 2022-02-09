+(function (window, document) {

  'use strict';
	
  let serial_buttonRequest = document.getElementById('button_webserial_open');

	
  function webserial_get_serialport(input_status, input_select) {
// 		if (document.getElementById(input_serialportstatus)) {
// 		var serialport_status = document.getElementById(input_serialportstatus);
// 			if (serialport_status == "open")
	  document.getElementById(input_status).style.display = "block";
// 	  document.getElementById(input_serialportstatus).addEventListener('click', async () => {startSerial();});
// 		}
	}
	
// 	function robofly_unlock_command(input_lock_status) {
// 		serial_uint8.value = input_lock_status;
// 		serial_sendUint8.click();
// 	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
