export function printDiv2(nombre, apellido, nacionalidad, edad, estudios, conocimientos, experiencias, cursos, idiomas, languageTexts) {

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

    //Datos Personales
    a.document.write('<div style="margin-top: 20px;">');
    a.document.write(`<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.apellidonombre}: ${apellido} ${nombre}</label></div>`);
    a.document.write(`<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.nacionalidad}: ${nacionalidad}</label></div>`);
    a.document.write(`<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.edad}: ${edad}</label></div>`);
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
        '<div style="display: flex; align-items: flex-start; width:100%;">'
    );

    // =========== 2 COLUMNAS ============
    a.document.write('<div style="display: flex; flex: 1;">');

    // =========== Columna 1 ============
    a.document.write('<div style="flex: 1; margin-right: 20px;">');

    // =========== 1. EXPERIENCIA LABORAL ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.experiencialab + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar la experiencia laboral
    a.document.write("</div>");

    // =========== 2. ESTUDIOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; border-bottom: 1px solid black; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los estudios
    a.document.write("</div>");

    // =========== 3. CURSOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; border-bottom: 1px solid black; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.otrosEstudios + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los cursos
    a.document.write("</div>");

    a.document.write("</div>");

    // =========== Columna 2 ============
    a.document.write('<div style="flex: 1;">');

    // =========== 4. CONOCIMIENTOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.conocimientotec + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los conocimientos
    a.document.write("</div>");

    // =========== 5. IDIOMAS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; border-bottom: 1px solid black; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.idiomas + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los idiomas
    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");
    a.document.write("</body></html>");

    a.document.close();
    setTimeout(function() {
        a.print();
    }, 1000);
}
