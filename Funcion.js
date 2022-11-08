function Captura(){
    var nombre=document.getElementById("TxtNombre").value;
    let email=document.getElementById("TxtMail").value;
    let numero=document.getElementById("TxtNum").value;
    let mensaje=document.getElementById("TxtMsj").value;
    console.log(nombre+" "+email+" "+numero+" "+mensaje);
    alert("Datos guardados satisfactoriamente")
}