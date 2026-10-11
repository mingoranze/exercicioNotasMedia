let notas = []

const inputs = document.querySelectorAll(".nota")
const botaoSalvar = document.getElementById("salvar")
const textoMedia = document.getElementById("media")
const textoResultado = document.getElementById("resultado")

botaoSalvar.addEventListener("click", () => {
    notas = []

    for (const input of inputs) {
        const nota = Number(input.value)

        if (input.value === "" || nota < 0 || nota > 10) {
            alert("Preencha as 10 notas com valores de 0 a 10.")
            return
        }

        notas.push(nota)
    }

    let soma = 0
    for (const nota of notas) {
        soma += nota
    }
    const media = soma / notas.length

    let resultado
    if (media < 5) {
        resultado = "Ruim"
    } else if (media < 8) {
        resultado = "Bom"
    } else {
        resultado = "Ótimo"
    }

    textoMedia.textContent = media.toFixed(1)
    textoResultado.textContent = resultado
})
