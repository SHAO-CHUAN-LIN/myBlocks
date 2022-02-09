+(function (window, document) {

  'use strict';
	
  let serial_buttonRequest = document.getElementById('button_webserial_open');

	
  function webserial_get_serialport(input_status, input_select) {
	  document.getElementById(input_status).style.display = input_select;
	}
	
// 	function robofly_unlock_command(input_lock_status) {
// 		serial_uint8.value = input_lock_status;
// 		serial_sendUint8.click();
// 	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
