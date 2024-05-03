const cargarMuseos = () => {
   fetch("http://localhost:3000/museos")
   .then(response => response.json())
   .then(museos => mostrarMuseos(museos))
   .catch(error => console.error(error));
};

cargarMuseos();

function filtrarMuseos(){
   const filtro = document.getElementById("inputBuscar").value;
   
   if (filtro === ""){
      cargarMuseos();
      return
   }
   
   fetch(`http://localhost:3000/museos/filtro/${filtro}`)
      .then(response => response.json())
      .then(museos => mostrarMuseos(museos))
      .catch(error => console.error(error))
}

function mostrarMuseos(museos){
   let contenido = "";

   museos.forEach(museo => {
      contenido += `
      <tr>
         <td>${museo.nombre}</td>
         <td>${museo.ubicacion}</td>
         <td>${museo.exposiciones}</td>
         <td>${museo.horarios}</td>
         <td>${museo.precioEntrada}</td>
      </tr>`
   });

   document.getElementById("lista-museos").innerHTML = contenido;
}