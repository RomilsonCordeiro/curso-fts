function diceRoll(){
    let num = Math.random()
    num = num * 6
    num = Math.floor(num + 1 )
    return num 
}
console.log(diceRoll())