const ramos = {
  anatomia: {
    nombre: "Anatomía I",
    creditos: 5,
    prerrequisitos: "Ninguno",
    estado: "Aprobado"
  },
  fisio: {
    nombre: "Fisiología",
    creditos: 6,
    prerrequisitos: "Anatomía I",
    estado: "Pendiente"
  }
};

function mostrarInfo(ramo) {
  const datos = ramos[ramo];
  const contenido = `
    <h2>${datos.nombre}</h2>
    <p><strong>Créditos:</strong> ${datos.creditos}</p>
    <p><strong>Prerrequisitos:</strong> ${datos.prerrequisitos}</p>
    <p><strong>Estado:</strong> ${datos.estado}</p>
  `;
  document.getElementById("contenido").innerHTML = contenido;
  document.getElementById("info").classList.remove("hidden");
}

function cerrarInfo() {
  document.getElementById("info").classList.add("hidden");
}
