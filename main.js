const CaixaPrincipal = document.querySelector(".caixa-principal")
const CaixaPerguntas = document.querySelector(".caixas-perguntas")
const CaixaAlternativas = document.querySelector(".caixas-alternativas")
const CaixaResultado = document.querySelector(".caixa-resultado")
const textoRessultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]     
    }
]

let atual = 0;
let perguntaAtual

function mostrarPergunta() {
perguntaAtual = perguntas [atual]
CaixaPerguntas.textContent = perguntaAtual[atual]

}
