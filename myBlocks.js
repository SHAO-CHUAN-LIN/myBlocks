+(function (window, document) {

  'use strict';
	
  let serial_buttonRequest = document.getElementById('button_webserial_open');
  let serial_buttonClose = document.getElementById('button_webserial_close');

	
  function webserial_get_port(input_status, input_select) {
	  document.getElementById(input_status).style.display = input_select;
// 	  serial_buttonRequest.style.display = input_select;
	}
	
  function webserial_port(input_status) {
// 	  if (document.getElementById(input_status)) {
	  let status_value = document.getElementById(input_status);
		  if (status_value)
			  serial_buttonRequest.style.display = "block";
		  else if(input_status=="close")
			  serial_buttonClose.style.display = "block";
		  else
			  return "";
// 		  document.getElementById(input_id).addEventListener('click', async () => {startSerial();});	
// 		}
	}
	
	window.webserial_get_port = webserial_get_port;
	window.webserial_port = webserial_port;

}(window, window.document));
