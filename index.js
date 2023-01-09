let computerNumber
let userNumbers = [] //minhas tentativas
let max = 10

function init() {
   computerNumber  = Math.floor( Math.random()*100 +1 ) // floor arredonda inteiro
   
}

function newGame(){
    window.location.reload()
}

function compareNumbers(){

   const userNumber = Number(document.getElementById('inputBox').value)

   if(userNumber <=0 || userNumber>100){
    document.getElementById('textOutput').innerHTML = 'Número digitado deve estar entre 0 - 100'
    return
   }


   userNumbers.push(' '+userNumber)
   document.getElementById('guesses').innerHTML = userNumbers
   document.getElementById('attempts').innerHTML = userNumbers.length

    if(userNumbers.length <= 10){
        if(userNumber > computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu numero está alto'
            document.getElementById('inputBox').value = ' '
        }else
        if(userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu numero está baixo'
            document.getElementById('inputBox').value = ' '
        }else{
            document.getElementById('textOutput').innerHTML = 'Parabéns !!! acertou'
            document.getElementById('inputBox').setAttribute('Readonly','Readonly')
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'VENCEU PERDEU, PASSOU DE 10 TENTATIVAS O NÚMERO FOI '+computerNumer
        document.getElementById('inputBox').setAttribute('Readonly','Readonly')
    }

}