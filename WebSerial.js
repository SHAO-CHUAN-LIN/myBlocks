+(function (window, document) {

  'use strict';
	
  var serial_buttonRequest = document.getElementById('button_webserial_open');
  let serial_buttonClose = document.getElementById('button_webserial_close');

	
  function webserial_get_port(input_status, input_select) {
	  document.getElementById(input_status).style.display = input_select;
// 	  serial_buttonRequest.style.display = input_select;
	}
	
  function webserial_port(input_status) {
// 	  if (document.getElementById(input_status)) {
	  console.log("test");
		  if (input_status == "open")
			  document.getElementById('button_webserial_open').style.display = "block";
		  else if(input_status == "close")
			  document.getElementById('button_webserial_close').style.display = "block";
// 		  else
// 			  return "";
// 		  document.getElementById(input_id).addEventListener('click', async () => {startSerial();});	
// 		}
	}
	
	window.webserial_get_port = webserial_get_port;
	window.webserial_port = webserial_port;

}(window, window.document));
