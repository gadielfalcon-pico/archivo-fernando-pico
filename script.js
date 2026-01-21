// Colocar automáticamente el año actual en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Ejemplo de posible futura funcionalidad:
// Aquí podemos añadir interacciones, filtros, o funciones
// para trabajar con las listas de obras y recursos.