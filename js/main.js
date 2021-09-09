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

    var money = parseInt(localStorage.getItem("monto"));
    var valor = parseInt(document.getElementById("SCosto").value);
    var Usercash;

    if(document.getElementById("HorarioS").value === "Horario"){
        window.alert("Seleccione un horario");
    }
    else{
        if(document.getElementById("SSeleccionadas").value.length === 0){
            window.alert("Seleccione una silla");
        }
        else{
            if(money < valor){
                window.alert("No tiene el dinero suficiente para pagar la reserva");
            }
            else{
                money = money - valor;
                localStorage.setItem("monto", parseInt(money));
                Usercash = document.getElementsByClassName("DineroUsuario");
                for(i = 0; i < Usercash.length; i++){
                    Usercash[i].innerHTML = money;
                }
                compra();
                irA(5);
            }
        }
    }
}

function irA(id){
    for(var i = 0; i < secciones.length; i++){
        secciones[i].className = "ocultar";
    }
    secciones[id].className = "animate__animated animate__backInLeft";
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
    var manana = new Date(tmp.getTime() + DIA_EN_MILISEGUNDOS);
    var hora = document.getElementById("HorarioS").value;
    
    document.getElementById("SId").value = Math.floor(Math.random() * (300 - 1)) + 1;
    document.getElementById("SBus").value = "Bus #1";
    document.getElementById("SSillas").value = sillas.toString();
    document.getElementById("SHoraV").value = hora;
    document.getElementById("SFechaR").value = tmp.toISOString().split('T')[0];
    document.getElementById("SFechaV").value = manana.toISOString().split('T')[0];
    document.getElementById("SCodigo").value = Math.floor(Math.random() * (100 - 1)) + 1;

    for(var i = 0; i < sillas.length; i++){
        document.getElementById(sillas[i]).src = 'img/sillaR.png';
        document.getElementById(sillas[i]).className = "Reservado";
        sillasCompradas.push(sillas[i]);
    }

    sillas = [];
    costo = 0;

    document.getElementById("SSeleccionadas").value = "";
    document.getElementById("SCosto").value = "";
}

function iniciarVariables(){
    var money = 0;
    var Usercash;

    secciones.push(document.getElementById("S_inicio"));
    secciones.push(document.getElementById("S_registro"));
    secciones.push(document.getElementById("S_menu"));
    secciones.push(document.getElementById("S_reservaP1"));
    secciones.push(document.getElementById("S_reservaP2"));
    secciones.push(document.getElementById("S_reservaFactura"));
    secciones.push(document.getElementById("S_redbus"));
    secciones.push(document.getElementById("S_recarga"));
    secciones.push(document.getElementById("S_info"));
    secciones.push(document.getElementById("S_recargaFactura"));

    if(localStorage.getItem("monto") === null){
        localStorage.setItem("monto", parseInt(money));
        Usercash = document.getElementsByClassName("DineroUsuario");
        for(i = 0; i < Usercash.length; i++){
            Usercash[i].innerHTML = money;
        }
    }
    else{
        money = localStorage.getItem("monto");
        Usercash = document.getElementsByClassName("DineroUsuario");
        for(i = 0; i < Usercash.length; i++){
            Usercash[i].innerHTML = money;
        }
    }
}

function capturaDatosInicio(){
    var Icorreo = document.getElementById("I_Correo").value;
    var Ipassword = document.getElementById("I_Contra").value;

    var localSCorreo = localStorage.getItem("correo");
    var localSPassword = localStorage.getItem("password");

    var Usernames;

    if(Icorreo === localSCorreo && Ipassword === localSPassword){
        Usernames = document.getElementsByClassName("NombreUsuario");
        for(i = 0; i < Usernames.length; i++){
            Usernames[i].innerHTML = localStorage.getItem("nombre");
        }
        irA(2)
    }
    else{
        window.alert("Datos no compatibles o no se ha registrado correctamente. Verifique la información");
        document.getElementById("I_Correo").value = "";
        document.getElementById("I_Contra").value = "";
    }
}

function capturaDatosRegistro(){
    var Rnombre = document.getElementById("R_Nombre").value;
    var Rnacimiento = document.getElementById("R_FNacimiento").value;
    var Rcorreo = document.getElementById("R_Correo").value;
    var Rpassword = document.getElementById("R_Contra").value;
    var Rcelular = document.getElementById("R_Celular").value;

    localStorage.setItem("nombre", Rnombre);
    localStorage.setItem("nacimiento", Rnacimiento);
    localStorage.setItem("correo", Rcorreo);
    localStorage.setItem("password",Rpassword);
    localStorage.setItem("celular", Rcelular);

    irA(0);
}

function recarga(){
    var RecargaNoTarjeta = document.getElementById("Recarga_NoTarjeta").value;
    var RecargaTitular = document.getElementById("Recarga_Titular").value;
    var RecargaFVencimiento = document.getElementById("Recarga_FVencimiento").value;
    var RecargaNoSeguridad = document.getElementById("Recarga_NoSeguridad").value;
    var RecargaMonto = document.getElementById("Recarga_Monto").value;

    var tempMonto = 0;

    document.getElementById("SIdRecarga").value = Math.floor(Math.random() * (300 - 1)) + 1;
    document.getElementById("SNombreRecarga").value = RecargaTitular;
    document.getElementById("SNumTarjeta").value = RecargaNoTarjeta;
    document.getElementById("SMonto").value = RecargaMonto;

    localStorage.setItem("numeroTarjera", RecargaNoTarjeta);
    localStorage.setItem("titular", RecargaTitular);
    localStorage.setItem("fechaVencimiento", RecargaFVencimiento);
    localStorage.setItem("NumSeguridad",RecargaNoSeguridad);
    
    if(localStorage.getItem("monto") === null){
        localStorage.setItem("monto", parseInt(RecargaMonto));
    }
    else{
        tempMonto = parseInt(localStorage.getItem("monto"));
        tempMonto = tempMonto + parseInt(RecargaMonto);
        localStorage.setItem("monto", parseInt(tempMonto));
    }

    var Usercash = document.getElementsByClassName("DineroUsuario");
    for(i = 0; i < Usercash.length; i++){
        Usercash[i].innerHTML = tempMonto;
    }

    document.getElementById("Recarga_Monto").value = "";

    irA(9);
}