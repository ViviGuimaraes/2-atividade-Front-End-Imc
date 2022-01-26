// alert ('Olá mundo .');  é só um teste çpara ver se o Js está vinculado com o HTML 

    function camposValidos(){
        return document.getElementById('formulario').reportValidity();
    }

    function calcularImc(altura,peso){
        return peso / (altura * altura);
    }

    function classifcarImc (imc){
        let texto ;
        if ( imc < 18.5){
            texto = 'você está abaixo do peso,';
        } else if ( imc < 25){
            texto = 'você está no peso ideal, Parabéns !';
        }else if ( imc < 30){
            texto = 'você está levemente acima do peso,;'
        }else if ( imc < 35){
            texto = 'você está com obesidade grau I, Cuidado !';
        }else if ( imc < 40){
            texto = 'você está com obesidade grau II, Cuidado !';
        }else if ( imc < 45){
            texto = 'você está com obesidade grau III, cuidado !';
        }

    } //VALUE é um atributo que armazena o que está dentro de uma caixa.
    function mostrarResultado (){
        const nome = document.getElementById ('nome').value;
        const altura = document.getElementById('altura').value;
        const peso= document.getElementById('peso').value; 
        const resultado = document.getElementById('resultado');

        if (camposValidos()){
            //Variável criada para calcular o imc 
            const imc = calcularImc(altura , peso);
            let texto = classifcarImc(imc);
           
          


        // Aqui foi acrescentado váriáveis através da crase e cifrão, 
        // é outra forma de colocar = nome +' seu imc é ' + imc 

        resultado.textContent =  `${nome} seu IMC é  imc ${imc.toFixed(2)} ${texto}}` ;
    }else {
        resultado.textContent = 'Preencha todos os campos !';
    }
    }
        // Em Java Script Aspas  duplas e slples nãp tem diferenças ('' "")
        // Ja a crase aceita variáveis (``)

        
        document.getElementById('calcular').addEventListener('click', mostrarResultado);
        