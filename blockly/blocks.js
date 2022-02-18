Blockly.Blocks['webserial_get_serialport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_SELECT_COMPORT);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_BUTTON_CONNECT_SHOW,"button_webserial_open"],
	    	[Blockly.Msg.WEBSERIAL_BUTTON_CLOSE_SHOW,"button_webserial_close"]
  	]), "status_");
    this.appendDummyInput()
	.appendField(Blockly.Msg.WEBSERIAL_SHOW_SHOW)	  
        .appendField(new Blockly.FieldDropdown([
		["Y","block"],
		["N","none"]
  	]), "select_"); 
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
  }
};

Blockly.Blocks['webserial_serialport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_SELECT_COMPORT);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.WEBSERIAL_BUTTON_CONNECT_SHOW,"open"],
	    	[Blockly.Msg.WEBSERIAL_BUTTON_CLOSE_SHOW,"close"]
  	]), "status");
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
  }
};

Blockly.Blocks['webserial_open'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_OPEN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['webserial_close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_CLOSE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
 this.setTooltip("");
 this.setHelpUrl("");
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
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("等待時間");  
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(330);
  }
};

Blockly.Blocks['drone_up_and_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOFLY_SHOW)
          .appendField(new Blockly.FieldDropdown([
	      ["上昇","take_off"],
	      ["下降","landing"]
      ]), "status_");
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
