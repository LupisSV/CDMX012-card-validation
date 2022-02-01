import validator from './validator.js';
// alert(validator.maskify())
const validateCard = document.getElementById("validate")
//validateCard.onclick = validator;


validateCard.onclick = function(){
  validator
  var card = document.getElementById('card_number').value
  const resultadoValidacion = validator.isValid(card)
  if(resultadoValidacion){
    const tarjetaEnmascarada = validator.maskify(card);
    //alert(tarjetaEnmascarada)
    document.getElementById('resultValid').innerText = "La tarjeta ingresada es válida"
    document.getElementById('tarjeta-enmascaradaValida').innerHTML = tarjetaEnmascarada
  }
  else{
    //alert ("No es una tarjea válida ")
    const tarjetaEnmascarada = validator.maskify(card);
    //alert(tarjetaEnmascarada)
    document.getElementById('resultInvalid').innerText = "La tarjeta ingresada es inválida"
    document.getElementById('tarjeta-enmascaradaInvalida').innerHTML = tarjetaEnmascarada
  }
 
  
}

//alert(validator.maskify())
//console.log(validator)

/* function validate(){
    var card = document.getElementById('card_number').value
    if (card.length == 16){
        
        var finalCard = card
        console.log(card)
        //card=parseInt(card)
        for (var i = 0; i<card.length; i+=2)
        {
            var position = card.charAt(i)
            position = parseInt(position)
            var newValue = position*2
            console.log(newValue) 
            if(newValue >= 10){
                //console.log(newValue.toString().charAt(0))
                //var newValue1 = parseInt(newValue.toString().charAt(0))
                //var newValue2 = parseInt(newValue.toString().charAt(1))
                var newValueString = newValue.toString()
                var newValue1 = newValueString.charAt(0)
                newValue1 = parseInt(newValue1)
                var newValue2 = newValueString.charAt(1)
                newValue2 = parseInt(newValue2)
                var finalValue = newValue1 + newValue2
                console.log("actual " + finalValue)
                console.log(" Esta es la tarjeta inicial " +card)
                console.log(i,finalCard.length)
                finalCard = finalCard.substr(0,i)+finalValue.toString()+finalCard.substr(i-finalCard.length+1,finalCard.length-i)
            
                //console.log(" Esta es la tarjeta final " +finalCard)
            }
            else{
                finalCard = finalCard.substr(0,i)+newValue.toString()+finalCard.substr(i-finalCard.length+1,finalCard.length-i)
            // console.log(" Esta es la tarjeta final " +finalCard)
            }
            console.log(" Esta es la tarjeta final " +finalCard)
        }
        console.log("Hola " + finalCard)
        var total = 0;
        for (var i = 0; i<finalCard.length; i++){
            position = finalCard.charAt(i)
            position = parseInt(position)
            console.log(position)
            total += position
            console.log("Valor total" +total)
            
        }
        var validation = total.toString()
        if(validation.charAt(1)==0){
            console.log("Es una tarjeta válida")
        }
        else{
            console.log("Tarjeta invalida")
        }
    }
    else{
        alert("Tarjeta no válida")
    }
    
    
    
    //console.log(typeof(card))
} */


//console.log(validator);