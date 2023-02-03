function incriptar(){
   let frase=document.getElementById("texto").value ;
   
   frase=frase.replaceAll("e", "enter");
   frase=frase.replaceAll("i", "imes");
   frase=frase.replaceAll("a", "ai");
   frase=frase.replaceAll("o", "ober");
   frase=frase.replaceAll("u", "ufat");  
   if (frase.length!=0) {
    if (/[^a-zñ ]/.test(frase)) {
        document.getElementById("inf-corri").style.color="red"; 
       swal("No se permiten Mayusculas, ni caracteres especiales","","error");
    }
       
       else{
        document.getElementById("inf-corri").style.color="black"; 
       document.getElementById("mostrar").innerHTML=frase ;   
       aparecer();  
    }}
}

function desencriptar(){
    let frase=document.getElementById("texto").value ;
    frase=frase.replaceAll("enter", "e");
    frase=frase.replaceAll("imes", "i");
    frase=frase.replaceAll("ai", "a");
    frase=frase.replaceAll("ober", "o");
    frase=frase.replaceAll("ufat", "u");      
    if (frase.length!=0) {
        if (/[^a-zñ ]/.test(frase)) {
            document.getElementById("inf-corri").style.color="red"; 
            swal("No se permiten Mayusculas, ni caracteres especiales")
           
        }
     
           else{
            document.getElementById("inf-corri").style.color="black"; 
           document.getElementById("mostrar").innerHTML=frase ;   
           aparecer();
       }}
}


function copiar(){
    let cifrado = document.getElementById("mostrar");
    cifrado.select();
    cifrado.setSelectionRange(0,99999);
    document.execCommand ("copy")
}

function aparecer(){
    document.getElementById("visible").style.display="none";
    document.getElementById("oculto").style.display="block";

}