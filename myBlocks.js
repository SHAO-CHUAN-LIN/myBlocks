+(function (window, document) {

  'use strict';
	let serial_buttonRequest = document.getElementById('Button_webserial_open');
	let serial_buttonClose = document.getElementById('Button_webserial_close');
	
	function webserial_button(input_id, input_show) {
		document.getElementById(input_id).style.display = input_show;
	}

	function webserial_button_onclick(input_button, input_id) {
		if (document.getElementById(input_id)) {
			if (input_button=="webserial_open")
				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});
			else
				document.getElementById(input_id).addEventListener('click', async () => {buttonClose();});	
		}
	}
  
	window.webserial_button_onclick = webserial_button_onclick;

}(window, window.document));
