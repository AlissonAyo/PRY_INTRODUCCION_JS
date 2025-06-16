//FUNCION PARA SUMAR

function calcular_suma(){
   let n1 = document.getElementById("numero_1").value;
    let n2 = document.getElementById("numero_2").value;

    let res = parseFloat(n1)+parseFloat(n2);

    let h1_resultado = document.getElementById("txt_resultado");
    h1_resultado.innerHTML = "El resultado de la suma es: " + res;
}