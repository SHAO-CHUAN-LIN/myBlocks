// Blockly.JavaScript['drone_command_method'] = function(block) {
//   var variable_bte = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('BTE'), Blockly.Variables.NAME_TYPE);
//   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//   var variable_samplinginterval = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('samplingInterval'), Blockly.Variables.NAME_TYPE);
//   // TODO: Assemble Arduino into code variable.
//   var code = '...;\n';
//   return code;
// };
Blockly.JavaScript['webserial_get_serialport'] = function(block) {
  var value_button = block.getFieldValue('serialport_status');   
//   var value_id = Blockly.JavaScript.valueToCode(block, 'id_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'webserial_port("'+value_button+'")';
  return code;
};

Blockly.JavaScript['robofly_unlock_command'] = function(block) {
  var value_lock_status = block.getFieldValue('lock_status');
  var code = "robotfly_status('"+ value_lock_status +"')";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['drone_take_off'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_up_and_down'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
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
