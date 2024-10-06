function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Mi Menu')
    .addItem('Formulario Html', 'formulario')
    .addToUi();
}

function formulario(){
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(500)
    .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(html,'Ventana de dialogo');
}

function procesarFormulario(objetoFormulario){
  var nombre = objetoFormulario.minombre;
  var edad = objetoFormulario.miedad;
  var color = objetoFormulario.color;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = ss.getSheetByName('Hoja 1');
  var ultimaFila = hoja.getLastRow()+1;
  var rango = ss.getRange('A'+ultimaFila+':C'+ultimaFila);
  var arreglo = [];
  arreglo.push(nombre);
  arreglo.push(edad);
  arreglo.push(color);
  rango.setValues([arreglo]); 
  return true;
}