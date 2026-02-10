/* Lista de palavras baseada nos arquivos do projeto */ 
const listaPalavras = ['html', 'input', 'label', 'div', 'head', 'body', 'button', 'script', 'link', 'span', 'css', 'flex', 'gradient', 'hover', 'border', 'margin', 'padding', 'color', 'shadow', 'font', 'javascript', 'const', 'function', 'event', 'random', 'math', 'string', 'length', 'return', 'selector'];

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

function iniciarJogo() {
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    letrasChutadas = [];
    tentativasRestantes = 7;
    numeroErros = 0;

    // Reseta elementos da interface ao reiniciar
    document.getElementById("entrada-letra").disabled = false;
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("mensagem").innerText = "";
    
    atualizarExibicao();
}

function atualizarExibicao() {
    document.getElementById("exibicao-palavra").innerText = exibicaoPalavra.join(" ");
    document.getElementById("letras-chutadas").innerText = `${letrasChutadas.join(", ")}`;
    document.getElementById("imagem").src = `imagens/forca${numeroErros}.png`;

    if (tentativasRestantes === 0) {
        encerrarJogo("VOCÊ MORREU!");
    } else if (!exibicaoPalavra.includes('_')) {
        encerrarJogo("Parabéns! Você venceu!");
    }
}

function chutarLetra() {
    const entradaLetra = document.getElementById("entrada-letra");
    const letra = entradaLetra.value.toLowerCase();

    // Validação de entrada
    if (!letra.match(/[a-zà-ùç]/i) || letra === "") {
        alert("Por favor, insira uma letra válida.");
        return;
    }

    if (letrasChutadas.includes(letra)) {
        alert("Você já tentou essa letra. Tente outra.");
        return;
    }

    letrasChutadas.push(letra);

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            }
        }
    } else {
        tentativasRestantes--;
        numeroErros++;
    }

    entradaLetra.value = '';
    entradaLetra.focus(); // Mantém o foco no input para facilitar o próximo chute
    atualizarExibicao();
}

function encerrarJogo(mensagem) {
    document.getElementById("entrada-letra").disabled = true; // Correção para .disabled
    document.getElementById("mensagem").innerText = mensagem;
    document.getElementById("btn-reiniciar").style.display = "block";
}

// Inicia o jogo automaticamente ao carregar a página
iniciarJogo();