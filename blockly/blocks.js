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
    this.setColour(230);
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
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['robofly_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_CONNECT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['webserial_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBSERIAL_GETSTATE_SHOW);
    this.setInputsInline(true);	 	  
    this.setOutput(true, null);  
    this.setColour(300);
  }  
};

Blockly.Blocks['robofly_height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_HEIGHT);	  
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("，等待");
    this.appendDummyInput()
          .appendField("秒")
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(100);
  }
};

Blockly.Blocks['robofly_unlock_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOFLY_UNLOCK_SHOW,"unlock"],
 		[Blockly.Msg.ROBOFLY_LOCK_SHOW,"lock"]
  	]), "lock_status");
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("，" + Blockly.Msg.ROBOFLY_WAIT);
    this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOFLY_SECOND)
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(100);
  }
};

Blockly.Blocks['robofly_up_and_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.ROBOFLY_SHOW)
          .appendField(new Blockly.FieldDropdown([
	      [Blockly.Msg.ROBOFLY_TAKE_OFF,"take_off"],
	      [Blockly.Msg.ROBOFLY_SHUT_DOWN,"shut_down"]
      ]), "throttle_status");
      this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("持續");
      this.appendDummyInput()
          .appendField("秒")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['robofly_go_straight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOFLY_STRAIGHT,"straight"],
 		[Blockly.Msg.ROBOFLY_BACK,"back"]
  	]), "direction_status");
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("持續");
    this.appendDummyInput()
          .appendField("秒")
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(330);
  }
};

Blockly.Blocks['robofly_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOFLY_RIGHT_MOVE,"right"],
 		[Blockly.Msg.ROBOFLY_LEFT_MOVE,"left"]
  	]), "move_status");
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("持續");
    this.appendDummyInput()
          .appendField("秒")
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(65);
  }
};

Blockly.Blocks['robofly_deflection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_SHOW);	  
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.ROBOFLY_RIGHT_DEFLECTION,"right"],
 		[Blockly.Msg.ROBOFLY_LEFT_DEFLECTION,"left"]
  	]), "deflection_status");
    this.appendValueInput("delay_time")
        .setCheck("Number")
        .appendField("持續");
    this.appendDummyInput()
          .appendField("秒")
    this.setInputsInline(true);	 	  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(65);
  }
};

Blockly.Blocks['robofly_landing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBOFLY_LANDING);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
