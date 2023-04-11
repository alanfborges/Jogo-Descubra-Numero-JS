//declara um vetor de escopo global que irá conter os erros
let erros = [];

//gera um numero aleatorio entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;

//declara constante com o número de chances
const CHANCES = 6;

//função para apostar
function apostarNumero() {
    //Cria referencia ao campo de entrada e obtem o seu conteudo
    const inNumero = document.getElementById('inNumero');
    const numero = Number(inNumero.value);

    //valida o numero 
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido...");
        inNumero.focus();
        return;
    }

    //referencia espaços das saídas de dados
    const outDica = document.getElementById('outDica');
    const outErros = document.getElementById('outErros');
    const outChances = document.getElementById('outChances');

    //se aposta do jogador for igual ao numero sorteado
    if (numero === sorteado) {
        alert("Parabéns!! Você Acertou!!");
        //troca status dos botoes
        btApostar.disabled = true;
        btJogarNova.className = "exibe"
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
    } else {
        //se o numero existe no vetor
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro...")
        } else {
            erros.push(numero); //adiciona o numero no vetor
            let numErros = erros.length; //obtem o tamanho do vetor
            let numChances = CHANCES - numErros; //calcula numero de chances

            //exibe o numero de erros .conteudo do vetor e o numero chances
            outErros.textContent = numErros + " (" + erros.join(", ") + ")";
            outChances.textContent = numChances;

            if (numChances === 0) {
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogarNova.className = "exibe";
                outDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
            } else {
                //usa operador ternario para mensagem de dica
                let dica = numero < sorteado ? "maior" : "menor";
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }

    //limpa os campos de entrada eposiciona o curso neste campos
    inNumero.value = "";
    inNumero.focus();
}
//cria referencia ao btApostar registra a function com o evento click
const btApostar = document.getElementById('btApostar');
btApostar.addEventListener("click", apostarNumero);

//funcao contem o metodo reload() que recarrega a pgina um novo numero sera sorteado e o vetor de erros sera zerado
function jogarNovamente() {

    //recarrega a pagin
    location.reload();
}

//cria referencia ao btJjoganova e registra a function associando ao evento click
const btJogarNova = document.getElementById('btJogarNova');
btJogarNova.addEventListener("click", jogarNovamente);