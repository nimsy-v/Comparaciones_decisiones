let nota = Number(prompt(`Ingrese su nota`));

// Se valida que la nota no sea menor que 0 y mayor que 100
if (nota < 0 || nota > 100) {
  console.log(
    `La nota no es válida ${nota}, vuelva a ingresar una nota válida`
  );
  // Se valida que la nota sea mayor o igual que 90 y menor o igual que 100
} else if (nota >= 90 && nota <= 100) {
  console.log(`Tu nota es ${nota}, apruebas con "Excelente"`);
  // Se valida que la nota sea mayor o igual que 75 y menor o igual que 89
} else if (nota >= 75 && nota <= 89) {
  console.log(`Tu nota es ${nota}, apruebas con "Bien"`);
  // Se valida que la nota sea mayor o igual que 60 y menor o igual que 74
} else if (nota >= 60 && nota <= 74) {
  console.log(`Tu nota es ${nota}, apruebas con "Suficiente"`);
} else {
  console.log(`Tu nota es ${nota}, El estudiante no aprueba`);
}
