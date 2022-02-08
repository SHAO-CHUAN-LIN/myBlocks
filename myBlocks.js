+(function (window, document) {

  'use strict';
	
	function webserial_get_serialport(input_button, input_id) {
		if (document.getElementById(input_id)) {
			if (input_button=="open")
				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});
		}
	}
  
	window.webserial_get_serialport = webserial_get_serialport;

}(window, window.document));
