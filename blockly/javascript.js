Blockly.JavaScript['webserial_get_serialport'] = function(block) {
  var value_status = block.getFieldValue('status_');   
  var value_select = block.getFieldValue('select_');
  var code = 'webserial_get_port("'+value_status+'","'+value_select+'");\n';
  return code;
};

Blockly.JavaScript['webserial_serialport'] = function(block) {
    var value_status = block.getFieldValue('status');   
    var code = 'webserial_port("'+value_status+'");\n';
  return code;
};

Blockly.JavaScript['webserial_open'] = function(block) {
    var hidden_dropdown = document.getElementById('demo-select').style.display = "none";  
    var code = 'webserial_port("open");\n'+
               'document.getElementById("demo-area-01-show").innerHTML = "等待連線...";\n'+
//               'document.getElementById("demo-select").style.display = "none";\n';
               '"dropdown_box：'+ hidden_dropdown +'";\n';
  return code;
};

Blockly.JavaScript['webserial_close'] = function(block) {
    var code = 'webserial_port("close");\n';
  return code;
};

Blockly.JavaScript['robofly_connect'] = function(block) {
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                'await delay(1);\n';
  return code;
};

Blockly.JavaScript['webserial_status'] = function(block) {
  //  var code = 'JSON.stringify(webserial_status())';
//   var test = 'var test = {"name":"John", "birth":"1986-12-14", "city":"New York"};\n';
//   var obj = 'var obj = JSON.parse(test);\n';
//   var code = test + obj +'console.log(obj.name)';
//   var code = 'console.log(JSON.stringify('+ test +'))';
  var code = 'webserial_status()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robofly_unlock_command'] = function(block) {
    var value_lock_status = block.getFieldValue('lock_status');
    var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_lock_status == "unlock")
      var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x07,0xe8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE4");\n'+
//                'await delay_time('+ value_time +');\n'+
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
    else if(value_lock_status == "lock")
      var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xe8,0x03,0xe8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
//                'await delay_time('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['robofly_up_and_down'] = function(block) {
  var value_status = block.getFieldValue('throttle_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "take_off")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x3A,0x07,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x3C");\n'+ //1850
//               'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  else if(value_status == "landing")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xE8,0x03,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xEA");\n'+ //1000
//                'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['robofly_go_straight'] = function(block) {
  var value_status = block.getFieldValue('direction_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "straight")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
//                 'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  else if(value_status == "back")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
//                'await delay('+ value_time +');\n';
                  'var time = '+ value_time +';\n'+
                  'while(time >= 0)\n'+
                  '	{\n'+
                      '		send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xd0,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xD8");\n'+
                      '		await delay(1);\n'+
                      '		time = time - 1;\n'+
                  '	}\n';
  return code;
};

Blockly.JavaScript['robofly_move'] = function(block) {
  var value_status = block.getFieldValue('move_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "right")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
                'await delay('+ value_time +');\n';
  else if(value_status == "left")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
                'await delay('+ value_time +');\n';
  return code;
};

Blockly.JavaScript['robofly_deflection'] = function(block) {
  var value_status = block.getFieldValue('deflection_status');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "right")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0xA4,0x06,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xA3");\n'+ //1700(1500t)
                'await delay('+ value_time +');\n';
  else if(value_status == "left")
    var code = 'send_data("0x24,0x4D,0x3C,0x10,0xC8,0xDC,0x05,0xDC,0x05,0x14,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0xDC,0x05,0x10");\n'+ //1300(1500t)
                'await delay('+ value_time +');\n';
  return code;
};

Blockly.JavaScript['drone_land'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
