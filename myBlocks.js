+(function (window, document) {

  'use strict';
	
//   let serial_buttonRequest = document.getElementById('button_webserial_open');
//   let serial_buttonClose = document.getElementById('button_webserial_close');

	
  function webserial_port(input_status, input_select) {
	  document.getElementById(input_status).style.display = input_select;
// 	  serial_buttonRequest.style.display = input_select;
// 	  serial_buttonRequest.style.display = "block";
	}
//   function webserial_port(input_status, input_select) {
// 	  if (document.getElementById(input_status)) {
// 			if (input_status=="open")
// 				document.getElementById(input_id).addEventListener('click', async () => {startSerial();});	
// 		}
// 	}
  
	window.webserial_port = webserial_port;

}(window, window.document));
