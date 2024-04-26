export function printDiv2(nombre, apellido, nacionalidad,edad, estudios, conocimientos, experiencias,cursos) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
      .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
      '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");


    // CV
    a.document.write('<div style="margin-bottom:2%; text-align: left; margin-top:3%;">');
    a.document.write(
      '<label style="font-size: 25px; font-family: \'Franklin Gothic Medium Cond\';">Curriculum Vitae</label>'
    );
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
      '<div style="display: inline-block; align-items: center; width:100%;">'
    );
  
  
    // =========== 1. DATOS PERSONALES ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; ">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">DATOS PERSONALES</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");
  
    // =========== Apellido y Nombre ============
    a.document.write('<div style="display: flex; margin-top: 15px;">');
    a.document.write('<div style="font-weight: bold; flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + 'Apellido y nombre: ' + apellido + ' ' + nombre + '</label></div>');
    a.document.write("</div>");

    // =========== Nacionalidad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:10; font-family: \'Arial\'; font-size: 18px;"><label>'  + 'Nacionalidad: ' + nacionalidad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + 'Edad: ' + edad + '</label></div>');
    a.document.write("</div>");

  

    // =========== ESTUDIOS CURSADOS ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">ESTUDIOS CURSADOS</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // Supongamos que estudios es un arreglo de objetos con la estructura { nombreUniversidad, carrera, generacion }
    // Iteramos sobre cada objeto en el arreglo
    estudios.forEach(estudio => {
      // =========== Universidad ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write(`<div style="font-weight: bold; flex:5; font-family: \'Arial\'; font-size: 18px;"><label>${estudio.universidad}</label></div>`);
      a.document.write("</div>");

      // =========== Carrera ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>Carrera:</label></div>`);
      a.document.write(`<div style="font-weight: bold; flex:9; font-family: \'Arial\'; font-size: 18px;"><label>${estudio.carrera}</label></div>`);
      a.document.write("</div>");

      // =========== Generacion ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>Generación:</label></div>`);
      a.document.write(`<div style="font-weight: bold; flex:8; font-family: 'Arial'; font-size: 18px;"><label>${estudio.generacion.getFullYear()}</label></div>`);
      a.document.write("</div>");
    });


    // =========== CONOCIMIENTOS ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">CONOCIMIENTOS</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // Iteramos sobre cada objeto en el arreglo
    conocimientos.forEach(conocimiento => {
        // =========== Conocimiento ============
        a.document.write('<div style="display: flex; margin-top: 15px;">');
        a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="flex:5; font-family: \'Arial\'; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
        a.document.write("</div>");
    });
  

    // =========== EXPERIENCIA LAB ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">EXPERIENCIA LABORAL</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    // Iteramos sobre cada objeto en el arreglo
    experiencias.forEach(experiencia => {
      // =========== Puesto ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>Puesto:</label></div>');
      a.document.write('<div style="font-weight: bold; flex: 9; font-family: \'Arial\'; font-size: 18px;"><label>' + experiencia.puesto + '</label></div>');
      a.document.write("</div>");

      // =========== Empresa ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>Empresa:</label></div>');
      a.document.write('<div style="font-weight: bold; flex:9; font-family: \'Arial\'; font-size: 18px;"><label>' + experiencia.empresa + '</label></div>');
      a.document.write("</div>");

      // =========== Tiempo ============
      // Convertir las fechas a objetos de fecha JavaScri
      
      const fechaInicio = new Date(experiencia.fechaIni);
      const fechaFin = new Date(experiencia.fechaFin);

      // Extraer el mes y el año de cada fecha
      const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
      const añoInicio = fechaInicio.getFullYear();
      const mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
      const añoFin = fechaFin.getFullYear();

      // Construir la cadena de tiempo formateada
      const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

      // Escribir en el documento
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>Fecha:</label></div>');
      a.document.write(`<div style="font-weight: bold; flex:9; font-family: \'Arial\'; font-size: 18px;"><label>${tiempoFormateado}</label></div>`);
      a.document.write("</div>");


      // =========== Actividades ============
      a.document.write('<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px; margin-bottom: 5px; margin-top: 10px;"><label>Actividades:</label></div>');
      a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-bottom: 10px;">');
      a.document.write(`<label>${experiencia.actividades}</label>`);
      a.document.write("</div>");
      
      a.document.write("</div>");
    });


    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
      // =========== CURSOS ============
      a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">CURSOS</label>'
      );
      a.document.write("</div>");
      a.document.write("</div>");

      // Iteramos sobre cada objeto en el arreglo
      cursos.forEach(curso => {
          // =========== nombre ============
          a.document.write('<div style="display: flex; margin-top: 15px;">');
          a.document.write(`<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>${curso.nombre}</label></div>`);
          a.document.write("</div>");

          // =========== Tiempo ============
          // Convertir las fechas a objetos de fecha JavaScri
          
          const fechaInicio = new Date(curso.fechaIni);
          const fechaFin = new Date(curso.fechaFin);

          // Extraer el mes y el año de cada fecha
          const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
          const añoInicio = fechaInicio.getFullYear();
          const mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
          const añoFin = fechaFin.getFullYear();

          // Construir la cadena de tiempo formateada
          const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

          // =========== organizacion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="font-weight: bold; flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${curso.organizacion}</label></div>`);
          a.document.write(`<div style="font-weight: bold; flex:8; font-family: \'Arial\'; font-size: 18px;"><label>${tiempoFormateado}</label></div>`);
          a.document.write("</div>");

          // =========== descripcion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${curso.descripcion}</label></div>`);
          a.document.write("</div>");

          a.document.write("</div>");
      });
    }
   
    a.document.write("</body></html>");

    
    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }
  