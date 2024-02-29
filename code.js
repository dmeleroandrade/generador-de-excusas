const excusaPrimera = [
    "Lo siento,",
    "Perdón,",
    "Disculpa,",
    "Vaya!",
  ];
  
  const excusaDos = [
    "se me olvidó",
    "tuve un problema con",
    "no pude completar",
    "no conseguí",
  ];
  
  const excusaAcción = [
    "mi tarea",
    "el informe",
    "el proyecto",
    "el trabajo",
  ];
  
  const excusaCuatro = [
    "porque mi ordenador se estropeó.",
    "debido a un problema de mi html.",
    "ya que perdí el net.",
    "porque mi mascota tenía dolor de pancha.",
  ];
  
  function generarExcusa() {
    const inicial = excusaPrimera[Math.floor(Math.random() * excusaPrimera.length)];
    const razon = excusaDos[Math.floor(Math.random() * excusaDos.length)];
    const actividad = excusaAcción[Math.floor(Math.random() * excusaAcción.length)];
    const adicional = excusaCuatro[Math.floor(Math.random() * excusaCuatro.length)];
  
    return inicial + " " + razon + " " +  actividad + " " + adicional


    
  }
  
  const botonGenerar = document.getElementById('generar-excusa');
  const parrafoExcusa = document.getElementById('excusa');
  
  botonGenerar.addEventListener('click', function() {
    const nuevaExcusa = generarExcusa();
    parrafoExcusa.textContent = nuevaExcusa;
  });
  