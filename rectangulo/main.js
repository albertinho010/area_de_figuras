
largo = parseInt(prompt("Ingreso el largo del rectángulo"));
  console.log('El largo es ' + largo + ' unidades')
  ancho = parseInt(prompt("Ingreso el ancho del rectángulo"));
  console.log('El ancho es ' + ancho + ' unidades')

  
function rectangulo(largo, ancho) {
  
  let area;
  area = (largo*ancho);
  alert('Si el largo mide ' + largo + ' unidades y el ancho mide' + ancho + ' unidades, entonces el área es de ' + area + ' unidades cuadradas');
  console.log('Si el largo mide ' + largo + ' unidades y el ancho mide' + ancho + ' unidades, entonces el área es de ' + area + ' unidades cuadradas')
}
rectangulo(largo, ancho);

