const cargarMuseos = () => {
   fetch("http://localhost:3000/museos")
   .then(response => response.json())
   .then(museos => {
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
   })
   .catch(error => console.log(error));
};

cargarMuseos();
