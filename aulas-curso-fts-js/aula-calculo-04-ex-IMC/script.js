function getImc(peso, altura){
    let imc = peso / Math.pow(altura, 2)
    return Math.round(imc)
}
console.log(getImc(90, 1.78))