function sumar(){

    try{
        let numA = parseFloat(document.getElementById("numero01").value);
        let numB = parseFloat(document.getElementById("numero02").value);
        document.getElementById("resultado").value = numA + numB;
    } catch(error){

        alert("No puedes ingresar caracteres no numéricos");
        document.getElementById("limpiar").click();

    }

    

    

    

}