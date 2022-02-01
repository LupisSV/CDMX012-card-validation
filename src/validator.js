

const validator = {

  isValid: function(card) {
      var finalCard = card
      //console.log(card)
      //card=parseInt(card)
      for (var i = 0; i < card.length; i += 2) {
        var position = card.charAt(i)
        position = parseInt(position)
        var newValue = position * 2
        //console.log(newValue)
        if (newValue >= 10) {
          //console.log(newValue.toString().charAt(0))
          //var newValue1 = parseInt(newValue.toString().charAt(0))
          //var newValue2 = parseInt(newValue.toString().charAt(1))
          var newValueString = newValue.toString()
          var newValue1 = newValueString.charAt(0)
          newValue1 = parseInt(newValue1)
          var newValue2 = newValueString.charAt(1)
          newValue2 = parseInt(newValue2)
          var finalValue = newValue1 + newValue2
          //console.log("actual " + finalValue)
          //console.log(" Esta es la tarjeta inicial " + card)
          //console.log(i, finalCard.length)
          // finalCard = finalCard.substr(0, i) + finalValue.toString() + finalCard.substr(i - finalCard.length + 1, finalCard.length - i)
          finalCard = finalCard.substr(0, i) + finalValue.toString() + finalCard.substr(i+1, finalCard.length-(i+1))

          // console.log(" Esta es la tarjeta final " +finalCard)
        }
        else {
          // finalCard = finalCard.substr(0, i) + newValue.toString() + finalCard.substr(i - finalCard.length + 1, finalCard.length - i)
          finalCard = finalCard.substr(0, i) + newValue.toString() + finalCard.substr(i+1, finalCard.length-(i+1))
          // console.log(" Esta es la tarjeta final " +finalCard)
        }
        //console.log(" Esta es la tarjeta final " + finalCard)
      }
       console.log("Hola " + finalCard)
      var total = 0;
      for ( i = 0; i < finalCard.length; i++) {
        position = finalCard.charAt(i)
        position = parseInt(position)
        //console.log(position)
        total += position
        console.log("Valor total" + total)

      }
      var validation = total.toString()
      if (validation.charAt(1) == 0) {
        return true
      }
      else {
        return false
      }
          
  },
  maskify: function (card) {
    //return '############'+card.substr(card.length-4,4)
    return card.slice(0,-4).replace(/./g, "#") + card.slice(-4)
  }
};




export default validator;
