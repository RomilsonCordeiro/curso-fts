function lifeInWeeks(age){
    let yearsRemaining = 90 - age
    let months = yearsRemaining * 12
    let weeks = yearsRemaining * 52
    let days = yearsRemaining * 365
    console.log('Você ainda tem ' + days + ' dias, ' + weeks + ' semanas e ' + months + ' meses de vida.')
}
lifeInWeeks(82)