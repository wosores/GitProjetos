/**
 * 
 * @param {
 * } n 
 * Celsius em fahrenheit
 * c=(f-32) * 5/9
 * f=c*9/5 +32
 ////MEU JEITO DE FAZER
function celsius(n){
    r = (n -32) *5/9
    console.log(`${n}°F é ${r}°C`)
}

function fare(n){
    r=n*9/5 +32
    console.log(`${n}°C é ${r}°F`)
}

celsius(500)

fare(30)


O JEITO DA ROCKETSEAT
*/

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Fluxo  de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Nomenclatura de Grau não identificado!')
    }
    //Fluxo fahrenheit para-> Celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign ='C'

    //Fluxo Celsius para-> fahrenheit
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree)+degreeSign
}

try{
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
}
catch(erro){
    console.log(error.message)
}