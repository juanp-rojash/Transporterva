let secciones = [];
let sillas = [];
let costo = 0;
let sillasCompradas = [];

window.onload = inicio();

function inicio(){
    iniciarVariables();
    irA(0);
}

function TransicionCompra(){
    compra();
    irA(5);
}

function irA(id){
    for(var i = 0; i < secciones.length; i++){
        secciones[i].className = "ocultar";
    }
    secciones[id].className = "";
}

function seleccionSilla(id){
    if(document.getElementById(id).className !== "Reservado"){
        var i = sillas.indexOf(id)
        if(sillas[i] !== id){
            document.getElementById(id).src = 'img/sillaA.png';
            sillas.push(id);
            costo = costo + 10000;
            document.getElementById("SSeleccionadas").value = sillas;
            document.getElementById("SCosto").value = costo;
        }
        else{
            if (i !== -1) {
                sillas.splice(i, 1);
            }
            document.getElementById(id).src = 'img/silla.png';
            costo = costo - 10000;
            document.getElementById("SSeleccionadas").value = sillas;
            document.getElementById("SCosto").value = costo;
        }
    }
}

function compra(){
    var tmp = new Date(Date.now());
    var DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    var hora = document.getElementById("HorarioS").value;

    document.getElementById("SId").value = Math.floor(Math.random() * (300 - 1)) + 1;
    document.getElementById("SBus").value = "Bus #1";
    document.getElementById("SSillas").value = sillas.toString();
    //document.getElementById("ShoraV").value = hora;
    document.getElementById("SFechaR").value = tmp.toISOString().split('T')[0];
    document.getElementById("SFechaV").value = tmp.getTime() + DIA_EN_MILISEGUNDOS;
    document.getElementById("SCodigo").value = Math.floor(Math.random() * (100 - 1)) + 1;

    for(var i = 0; i < sillas.length; i++){
        document.getElementById(sillas[i]).src = 'img/sillaR.png';
        document.getElementById(sillas[i]).className = "Reservado";
        sillasCompradas.push(sillas[i]);
    }

    sillas = [];
    costo = 0;
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