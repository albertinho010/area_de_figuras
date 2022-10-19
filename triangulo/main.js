



  
function triangulo(base, altura) {
  base = parseInt(prompt("Ingreso la base del triagulo"));
  console.log('La base es ' + base + ' unidades')
  altura = parseInt(prompt("Ingreso la altura del triangulo"));
  console.log('La altura es ' + altura + ' unidades')
  let area;
  area = ((base*altura)/2);
  alert('El área es de ' + area + ' unidades cuadradas');
  console.log('El área es de ' + area + ' unidades cuadradas')
}
console.log(triangulo(0,0));

