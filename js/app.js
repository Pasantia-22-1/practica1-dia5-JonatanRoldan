console.log('Aplication Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operadorA = forma['operadorA'];
    let operadorB = forma['operadorB'];
    let resultado = parseInt(operadorA.value) + parseInt(operadorB.value);
    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}

function Restar(){
    const forma = document.getElementById('forma');
    let operadorA = forma['operadorA'];
    let operadorB = forma['operadorB'];
    let resultado = parseInt(operadorA.value) - parseInt(operadorB.value);

    if(isNaN(resultado))
        resultado = 'La operacion no incluye numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}
function limpiar(){
    //document.getElementById("operadorA").value = "";
    //document.getElementById("operadorB").value = "";
    location.reload();
}