/* Caro Fulano(a)!
Você está convidado(a) para o casamento de Beltrano(a) e Ciclano(a), a ser
realizado no dia 05/12/2022, às 16 horas.
Contamos com a sua presença!
Atenciosamente,
os noivo(a)s */

var convidado = 'Thais';
var noivos = 'João e Maria';
var dataFormatada = '05/12/2002, às 16 horas';

/* Exemplo de formatação de texto 01 */
console.log('Caro(a) ' + convidado);
console.log('Você está convidado(a) para o casamento de '+ noivos + ' a ser realizado');
console.log('no dia ' + dataFormatada +'.');
console.log('Contamos com a sua presença!');
console.log('Atenciosamente, os noivo(a)s')

console.log('\n')

/* Exemplo de formatação de texto 02 */
var texto = 'Caro ' + convidado + '! \n' +
            'Você está convidado(a) para o casamento de '+ noivos + ' a ser realizado ' +
            'no dia ' + dataFormatada +'. \n\n' +
            'Contamos com a sua presença! \n' +
            'Atenciosamente, os noivo(a)s'
console.log(texto);

console.log('\n')

 /* Exemplo de formatação de texto 03 */
var texto2 = `Olá ${convidado}

Exemplo
`;
console.log(texto2);


//TIPO DE DADOS PRIMITIVOS
console.log('\n');
console.log('TIPO DE DADOS PRIMITIVOS');
console.log('\n');

//String
var nome = 'teste';
console.log(nome);
//Number
var idade = 28;
console.log(idade);
var decimal = 12.6;
console.log(decimal);
var negativo = -3;
console.log(negativo);
//Boolean
var verdadeiro = true;
console.log(verdadeiro);
var falso = false // A palavra FALSE é reservada da linguagem
console.log(falso);
//Null
var nulo = null;
console.log(nulo);
//Undefined
var  indefinido;
console.log(indefinido);
indefinido = 'MUDOU: Agora definiu um valor';
console.log(indefinido);


//TIPO DE DADOS NÃO PRIMITIVOS
console.log('\n');
console.log('TIPO DE DADOS NÃO PRIMITIVOS');
console.log('\n');

//Object
var pessoa = {
  nome: 'Carlos',
  idade: 28,
  ativo: true,
  endereco:{
    rua: 'Rua Mário Fernandes da Cunha',
    numero: 123,
    bairro: 'Alegria',
  }
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);
console.log(pessoa.endereco.rua);

pessoa.nome = 'Eduardo';
console.log(pessoa.nome);

//ARRAY
console.log('\n');
console.log('ARRAY');
console.log('\n');

//Posições 0, 1, 2, 3, 4
var lista = [1,2,3,4,5];
console.log(lista);
console.log(lista[0]);
console.log(lista[4]);

var listaPessoas = [
  { nome: 'Carlos', idade: 42 },
  { nome: 'Eduardo', idade: 20 },
]
console.log(listaPessoas);
console.log(listaPessoas[0].idade);

console.log('\n')

var texto = 'aaaaa';
var numero = 123;
var boleano = false;
var objeto = { nome: 'teste'};
var lista = [{ nome: 'teste2'}];

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof boleano);
console.log(typeof objeto);
console.log(typeof lista);

//OPERADORES MATEMÁTICOS - NUMBER
console.log('\n');
console.log('OPERADORES MATEMÁTICOS - NUMBER');
console.log('\n');

console.log(1 + 1); //2
console.log(1 + '1'); //11 ( neste caso o mais concatena)

console.log(1 - 1); //0
console.log(1 - '1'); //0

console.log(19 % 2); //Testa números ímpares (resultado 1)
console.log(20 % 2); //Testa números pares (resultado 0)

//Atribuição
var soma = 1; //Atribuição simples
console.log(soma);
soma += 20; //Atribuição com soma (igual a soma = soma + 20)
console.log(soma);

//Comparação (SEMPRE RETORNA UM BOOLEANO)
console.log(1 == 1) //Igualdade simples
console.log(1 ===1) //Igualdade estrita
console.log('1' == 1) //Igualdade simples
console.log('1' === 1) //Igualdade estrita

console.log('1' != 1) //Diferença simples
console.log('1' !== 1) //Diferença estrita

console.log(3 > 5)
console.log(3 < 5)
console.log(3 <= 5)

//Operadores Lógicos (comparação de booleanos)
var condicao1 = 1 === 1;
var condicao2 = 1 == 2;
console.log(condicao1, condicao2);

console.log(condicao1 && condicao2); //Tem que atender todas as condições
console.log(condicao1 || condicao2); //Tem que atender apenas uma das condições

console.log(!condicao1); //Nega o resultado de uma condição
console.log(!condicao2); //Nega o resultado de uma condição

var teste = '';
console.log(Boolean(teste));
var teste = 1;
console.log(Boolean(teste));

var nome = '';
var apelido = 'teste';
var chamarComo = nome || '' || apelido
console.log(chamarComo)
var chamarComo = apelido || '' || nome
console.log(chamarComo)
var chamarComo = '' || '' || 'Sem nada'
console.log(chamarComo)

////Operadores Unarios
var contador = 0;
console.log(contador);
contador++;
console.log(contador);
contador--;
console.log(contador);