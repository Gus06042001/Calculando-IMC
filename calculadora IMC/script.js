function imc(){
    var alt = window.document.getElementById('altura')
    var pes = window.document.getElementById('peso')
    var n1 = parseFloat(alt.value)
    var n2 = parseFloat(pes.value)
    var calculo = (n2/(n1*n1))*10000
    var res = window.document.getElementById('res')
    var categoria = calculo
    if(categoria < 18.5){
         res.innerHTML=`Seu Imc é ${categoria},você está abaixo do peso ideal.`}
        else if(categoria >= 18.5 && categoria < 25)   
        {res.innerHTML=`Seu Imc é ${categoria}, você está no peso ideal.`}
         
    if(categoria >= 25 && categoria < 30){
        res.innerHTML=`Seu Imc é ${categoria}, você está com sobrepeso.`
      } else if(categoria >= 30 && categoria < 39.9)
      {res.innerHTML=`Seu Imc é ${categoria},você está obeso.`}
        
    if(categoria >= 40)
      {res.innerHTML=`Seu Imc é ${categoria},você está com obesidade mórbida, com grave risco de saúde.`}
      else if(isNaN(categoria))
      {res.innerHTML=`Insira seus dados.`}


    }