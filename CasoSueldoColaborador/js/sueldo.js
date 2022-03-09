function calcularSueldo(){
    const costoHora = 3.25;

    let dias =  document.getElementById("diasTrabajados").value;

    let horas = document.getElementById("horasLaboradas").value;

    document.getElementById("resultado").value = dias * (horas * costoHora);
}