let secciones = [];

window.onload = inicio();

function inicio(){
    iniciarVariables();
    irA(0);
}

function irA(id){
    for(var i = 0; i < secciones.length; i++){
        secciones[i].className = "ocultar";
    }
    secciones[id].className = "";
}

function iniciarVariables(){
    secciones.push(document.getElementById("S_inicio"));
    secciones.push(document.getElementById("S_registro"));
    secciones.push(document.getElementById("S_menu"));
    secciones.push(document.getElementById("S_reservaP1"));
    secciones.push(document.getElementById("S_reservaP2"));
    secciones.push(document.getElementById("S_reservaFactura"));
    secciones.push(document.getElementById("S_redbus"));
    secciones.push(document.getElementById("S_recarga"));
    secciones.push(document.getElementById("S_info"));
    secciones.push(document.getElementById("S_notificacion"));
    secciones.push(document.getElementById("S_recargaFactura"));
}