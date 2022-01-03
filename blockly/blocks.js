Blockly.Blocks['drone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("無人機"), "Drone")
        .appendField(new Blockly.FieldDropdown([["起飛","ITEM1"], ["降落","ITEM2"]]), "dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};