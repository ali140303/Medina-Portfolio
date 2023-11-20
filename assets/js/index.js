function enviar(){

    let nombre=document.getElementById("name").value;
    let apellido=document.getElementById("apellido").value;
    let correo=document.getElementById("email").value;
    let message=document.getElementById("msg").value;

    if(nombre==""){

        document.getElementById("respID").innerHTML=`Campo Nombre vacío`;
        document.getElementById("nombreID").style.borderColor=`red`;

    }else if(apellido==""){

        document.getElementById("respID").innerHTML=`Campo Apellido vacío`;
        document.getElementById("apellidoID").style.borderColor=`red`;
        document.getElementById("nombreID").style.borderColor=`gray`;

    }else if(correo==""){
        document.getElementById("respID").innerHTML=`Correo faltante`;
        document.getElementById("correo").style.borderColor=`red`;
        document.getElementById("nombre").style.borderColor=`gray`;
        document.getElementById("apellido").style.borderColor=`gray`;
    }else if(message==""){
        document.getElementById("respID").innerHTML=`Genero faltante`;
        document.getElementsByName("radio").style.borderColor=`red`;
        document.getElementById("nombre").style.borderColor=`gray`;
        document.getElementById("apellido").style.borderColor=`gray`;
        document.getElementById("correo").style.borderColor='gray';
    }else{

        //alert(nombre+" "+apellido+" "+mensaje);
        console.log(nombre);
        console.log(apellido);
        console.log(correo);
        console.log(message);


        // document.getElementById("nombreID").style.borderColor=`black`;
        // document.getElementById("apellidoID").style.borderColor=`black`;

        document.getElementById("respID").innerHTML=`Nombre: ${nombre}    Apellido: ${apellido}<br>Correo: ${correo}<br>mensaje: ${message}`;

    }



    

}