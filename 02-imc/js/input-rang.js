

        const iniciarRange = (idRanger) =>{
            const range = document.getElementById(idRanger)
            const span= document.getElementById (`valor-${idRanger}`)
            
            
            const atualizarValor = () =>span.textContent = range.value
            range.addEventListener('input', atualizarValor)
 
             
         }
        //  forma de exportar funções da outra área de java\scrip
         export{
             iniciarRange

         }