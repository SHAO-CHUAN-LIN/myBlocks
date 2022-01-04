Blockly.Arduino['drone_command_method'] = function(block) {
  var variable_bte = Blockly.Arduino.nameDB_.getName(block.getFieldValue('BTE'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var variable_samplinginterval = Blockly.Arduino.nameDB_.getName(block.getFieldValue('samplingInterval'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Arduino into code variable.
  var jsbin = {
    'root': 'https://bin.webduino.io',
    'shareRoot': 'https://bin.webduino.io',
    'runner': 'https://bin.webduino.io/runner',
    'static': 'https://bin.webduino.io',
    'version': '3.38.13',
    user: {},
  };
  
  (function () {
    if (jsbin.user && jsbin.user.name) {
      $('.loggedout').hide();
      var menu = $('.loggedin').show();
      var html = $('#profile-template').text();
      var $html = $(html.replace(/({.*?})/g, function (all, match) {
        var key = match.slice(1, -1).trim(); // ditch the wrappers
        return jsbin.user[key] || '';
      }));
      if (jsbin.user.pro) {
        document.documentElement.className += ' pro';
        $html.find('.gopro').remove();
      } else {
        $html.find('.pro').remove();
      }
      menu.append($html);
    } else {
      $('.loggedout').show();
    }
  })();
  return code;
};

Blockly.JavaScript['drone_unlock'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['drone_locked'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
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
