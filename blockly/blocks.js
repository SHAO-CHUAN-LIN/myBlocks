// Blockly.Blocks['drone_command_method'] = {
//   init: function() {
//     this.appendValueInput("NAME")
//         .setCheck("String")
//         .appendField("無人機使用")
//         .appendField(new Blockly.FieldVariable("藍芽"), "BTE")
//         .appendField("連線至");
//     this.appendDummyInput()
//         .appendField("類比取樣")
//         .appendField(new Blockly.FieldVariable("250ms"), "samplingInterval");
//     this.setNextStatement(true, null);
//     this.setColour(195);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

Blockly.Blocks['webserial_get_serialport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_COMPORT_SELECT);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_CONNECT_SHOW,"open"],
	    	[Blockly.Msg.WEBSERIAL_CLOSE_SHOW,"close"]
  	]), "status_");
    this.appendDummyInput()  
	.appendField(Blockly.Msg.WEBSERIAL_SHOW_SHOW)	  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
// 		["N","none"]
  	]), "show_"); 
    this.setInputsInline(true);	 	  
    this.setOutput(true, null); 
    this.setColour(30);
  }
};

Blockly.Blocks['robofly_unlock_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_UNLOCK_SHOW,"unlock"],
 		[Blockly.Msg.WEBSERIAL_LOCK_SHOW,"lock"]
  	]), "lock_status"); 	  
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(230);
  }
};

Blockly.Blocks['drone_take_off'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機起飛");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_up_and_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("無人機")
          .appendField(new Blockly.FieldDropdown([
	      ["上昇","up"],
	      ["下降","down"]
      ]), "dropdown");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['drone_turn_left'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機左旋");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_turn_right'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機右旋");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_go_straight'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機前進");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_go_back'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機後退");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['drone_land'] = {
   init: function() {
    this.appendDummyInput()
        .appendField("無人機降落");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
