function AlgoritmoLuhn(number)
{
    const digitos = number.replace(/\D/g, '').split("").map(Number).reverse()

    let suma = 0

    for(let i = 0; i < digitos.length; i++){
        let digito = digitos[i]

        if(i % 2 ===1){
            digito *= 2

            if(digito > 9) digito -= 9
        }
        suma += digito
    }
    return suma % 10 === 0

}

document.getElementById("validar").addEventListener("click", function(){
    
    const dato = document.getElementById("dato").value
    const resultado = document.getElementById("resultado")

    if(dato.trim() === ""){
        resultado.textContent = "Ingresa un número de cédula"
        resultado.className = "Inválido"
        return
    }

    if(AlgoritmoLuhn(dato)){

        resultado.textContent = "Número de cédula válido"
        resultado.className = "Válido"
    }else{
        resultado.textContent = "Número de cédula inválido"
        resultado.className = "Inválido"
    }

}

)