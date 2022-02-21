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
               '"dropdown_box：'+ hidden_dropdown +'";\n';
  return code;
};

Blockly.JavaScript['webserial_close'] = function(block) {
    var code = 'webserial_port("close");\n';
  return code;
};

Blockly.JavaScript['webserial_status'] = function(block) {
    var code = 'webserial_status()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['robofly_unlock_command'] = function(block) {
    var value_lock_status = block.getFieldValue('lock_status');
    var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_lock_status == "unlock")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4");\n'+
               'await delay('+ value_time +');\n';
    else if(value_lock_status == "lock")
      var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8");\n'+
               'await delay('+ value_time +');\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['drone_up_and_down'] = function(block) {
  var value_status = block.getFieldValue('status_');
  var value_time = Blockly.JavaScript.valueToCode(block, 'delay_time', Blockly.JavaScript.ORDER_ATOMIC);
  if(value_status == "take_off")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xdc,0x05,0x14,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0x10");\n'+ //1300
               'await delay('+ value_time +');\n';
  else if(value_status == "landing")
    var code = 'send_data("0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xea");\n'+ //1000
               'await delay('+ value_time +');\n';
//   var code = "robotfly_status('"+ value_lock_status +"')";
//   return [code, Blockly.JavaScript.ORDER_NONE];
  return code;
};

Blockly.JavaScript['drone_turn_left'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_turn_right'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_go_straight'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_go_back'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_land'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
