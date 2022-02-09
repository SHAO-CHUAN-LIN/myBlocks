+(function (window, document) {

  'use strict';
	
  let serial_buttonRequest = document.getElementById('button_webserial_open');

	
  function webserial_get_serialport(input_status, input_select) {
	  document.getElementById(input_status).style.display = input_select;
	}
  function webserial_get_serialport(input_status, input_select) {
	  if (document.getElementById(input_status)) {
			if (input_select=="open")
				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});
			else
				document.getElementById(input_id).addEventListener('click', async () => {buttonClose();});	
		}
	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
