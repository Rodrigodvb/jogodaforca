🎮 Jogo da Forca - Web Dev Edition
Este projeto é um jogo interativo desenvolvido para praticar conceitos fundamentais de Front-End. O tema do jogo utiliza termos técnicos de HTML, CSS e JavaScript, integrando uma lógica de sorteio aleatório com uma interface dinâmica.

🚀 Funcionalidades
Sorteio Aleatório: O jogo seleciona palavras de um banco de dados técnico (ex: html, flex, callback).

Sistema de Tentativas: O jogador possui 7 tentativas antes de perder a partida.

Interface Dinâmica:

Exibição da palavra oculta por sublinhados (_).

Histórico de letras já chutadas para evitar repetições.

Mudança visual da forca baseada no número de erros.

Validação de Entrada: O sistema impede caracteres inválidos e letras repetidas através de alertas.

Reinicialização: Botão "Recomeçar" que reseta o estado do jogo e sorteia uma nova palavra sem precisar atualizar a página.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura a área de exibição, controles de entrada e containers de feedback.

CSS3: Define o layout centralizado, tipografia e o controle de visibilidade dos estados de vitória ou derrota.

JavaScript (ES6+): Gerencia toda a lógica do jogo, incluindo manipulação de arrays, controle do DOM e expressões regulares para validação.

📂 Estrutura de Arquivos
index.html: Contém a estrutura principal, incluindo o título, a imagem da forca e os campos de interação.

style.css: Responsável pelo design visual, garantindo que o jogo seja limpo e funcional.

script.js: Contém a inteligência do jogo, como a lista de 30 palavras e as funções de verificação de acertos.

📖 Como Jogar
Abra o arquivo index.html em seu navegador.

Observe o número de espaços vazios que representam a palavra secreta.

Digite uma letra no campo "Chute uma letra" e clique em "Chutar".

Se a letra estiver correta, ela aparecerá na posição correspondente.

Se estiver errada, a imagem da forca mudará e uma tentativa será subtraída.

O jogo termina quando você descobre a palavra ou esgota as 7 tentativas.
