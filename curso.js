
let estudantes = require('../estudantes/aluno');



const curso ={
    nomedoCurso:"Medicina",
    notaprov:4,
    maxfaltas:3,
    listestudantes:estudantes,

    adcest:function(estudante){
        this.listestudantes.push(estudante);
    },

   aprovadoLista : function(){

        let lista = [];
        this.listestudantes.forEach(

            item => {

                if(item.media() >= this.notaprov && item.quantidadeDeFaltas < this.maxfaltas){

                    lista.push(true);
                    console.log(`O aluno ${item.nome} obteve  a nota ${item.media()} com ${item.quantidadeDeFaltas} faltas, portanto 
                    foi APROVADO`);
                }else if(item.quantidadeDeFaltas === this.maxfaltas && item.media() > (this.notaprov * 1.1)){
                    console.log(`O aluno ${item.nome} obteve  a nota ${item.media()}, porém suas ${item.quantidadeDeFaltas} faltas fez com que alcança-se o 
                    número máximo de faltas, portanto teve uma nota muito boa em todo conteúdo, mediante isso ,sua situação é
                    APROVADO`);
                    lista.push(true);
                    
        
                }else{
        
                    lista.push(false);
                    console.log(`O aluno ${item.nome} obteve  a nota ${item.media()} com ${item.quantidadeDeFaltas} faltas, portanto 
                    foi REPROVADO`);
                }

            }

        )

        return lista;

    }

}
console.log(curso.aprovadoLista());