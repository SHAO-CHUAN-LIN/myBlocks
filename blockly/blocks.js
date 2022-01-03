Blockly.Blocks['drone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("無人機")
        .appendField(new Blockly.FieldDropdown([["起飛","ITEM1"], ["降落","ITEM2"]]), "dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
