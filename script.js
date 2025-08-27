// --- BANCO DE PALAVRAS ---
const listaDePalavras6Letras = [{"numero": 1,"palavra": "Mônica","dica": "Protagonista principal, conhecida por sua força e seu coelho Sansão."}, {"numero": 2,"palavra": "Cascão","dica": "Famoso por seu medo de água e por andar sempre sujinho."}, {"numero": 3,"palavra": "Cebola","dica": "Troca o 'R' pelo 'L' e cria planos 'infalíveis'."}, {"numero": 4,"palavra": "Magali","dica": "Tem um apetite insaciável, especialmente por melancia."}, {"numero": 5,"palavra": "Xaveco","dica": "Personagem cuja principal característica é ser o 'eterno secundário'."}, {"numero": 6,"palavra": "Penado","dica": "Fantasma que vive em um cemitério com outros monstros."}, {"numero": 7,"palavra": "Piteco","dica": "Homem das cavernas que vive na fictícia aldeia de Lem."}, {"numero": 8,"palavra": "Coelho","dica": "Em referência ao Sansão, o bichinho de pelúcia azul."}, {"numero": 9,"palavra": "Sansão","dica": "O nome oficial do coelho de pelúcia azul da Mônica."}, {"numero": 10,"palavra": "Mingau","dica": "O gato de estimação angorá da Magali."}, {"numero": 11,"palavra": "Marina","dica": "Adora desenhar e tem um lápis mágico."}, {"numero": 12,"palavra": "Denise","dica": "Conhecida por ser a mais descolada e fofoqueira."}, {"numero": 13,"palavra": "Nimbus","dica": "Amigo do Cascão que tem interesse por mágica e tempo."}, {"numero": 14,"palavra": "Aninha","dica": "A namorada ciumenta do Titi."}, {"numero": 15,"palavra": "Bairro","dica": "O famoso 'Bairro do Limoeiro'."}, {"numero": 16,"palavra": "Balões","dica": "Elemento gráfico para representar as falas dos personagens."}, {"numero": 17,"palavra": "Letras","dica": "Refere-se ao estilo do texto escrito nos gibis."}, {"numero": 18,"palavra": "Bolota","dica": "Uma onça-pintada amiga do Pererê, de Ziraldo."}, {"numero": 19,"palavra": "Sacaci","dica": "Um dos muitos primos do Saci que vivem na Mata do Fundão."}, {"numero": 20,"palavra": "Tônico","dica": "Primo do Chico Bento que mora na cidade."}];
const listaDePalavras8Letras = [{"numero": 1,"palavra": "Jeremias","dica": "Amigo antigo do Cebolinha, conhecido por seu boné."}, {"numero": 2,"palavra": "Jotalhão","dica": "O elefante verde e desastrado da Turma da Mata."}, {"numero": 3,"palavra": "História","dica": "A narrativa contada em cada gibi."}, {"numero": 4,"palavra": "Quadrado","dica": "Cada um dos quadros que compõem uma página de gibi."}, {"numero": 5,"palavra": "Turminha","dica": "Forma carinhosa de se referir ao grupo de personagens."}, {"numero": 6,"palavra": "Mauricio","dica": "O criador da Turma da Mônica."}, {"numero": 7,"palavra": "Leitores","dica": "O público que acompanha as histórias em quadrinhos."}, {"numero": 8,"palavra": "Humberto","dica": "Personagem que se comunica apenas por mímica."}, {"numero": 9,"palavra": "Carminha","dica": "A personagem Carminha Frufru, vizinha rica da Mônica."}, {"numero": 10,"palavra": "Bolinha","dica": "Personagem da Turma da Luluzinha, líder do 'Clube dos Meninos'."}, {"numero": 11,"palavra": "Gibiteca","dica": "Uma biblioteca ou coleção especializada em gibis."}, {"numero": 12,"palavra": "Tirinhas","dica": "As histórias curtas publicadas em jornais."}, {"numero": 13,"palavra": "Limoeiro","dica": "O nome do bairro fictício onde vive a Turma da Mônica."}, {"numero": 14,"palavra": "Desenhar","dica": "A ação de criar os traços dos personagens e cenários."}, {"numero": 15,"palavra": "Clássico","dica": "Termo para uma história ou personagem antigo de grande sucesso."}, {"numero": 16,"palavra": "Aventura","dica": "Um dos gêneros mais comuns das histórias."}, {"numero": 17,"palavra": "Infância","dica": "Fase da vida associada à leitura de gibis."}, {"numero": 18,"palavra": "Diálogos","dica": "As conversas entre os personagens nos balões de fala."}, {"numero": 19,"palavra": "Artistas","dica": "Os profissionais que criam as histórias em quadrinhos."}, {"numero": 20,"palavra": "Malandro","dica": "Arquétipo personificado pelo papagaio Zé Carioca."}];
const listaDePalavras10Letras = [{"numero": 1,"palavra": "Passatempo", "dica": "As atividades e jogos encontrados nos almanaques."}, {"numero": 2,"palavra": "Personagem", "dica": "Refere-se a qualquer figura de uma história, como a Mônica ou o Piteco."}, {"numero": 3, "palavra": "Colecionar", "dica": "O ato de juntar e guardar os gibis, um hobby muito popular."}, { "numero": 4, "palavra": "Republicar", "dica": "A ação de imprimir e publicar novamente uma história antiga."}, { "numero": 5, "palavra": "Letreirista", "dica": "O profissional que desenha as letras dos diálogos e das legendas." }, { "numero": 6, "palavra": "Jumentinho", "dica": "O Genesinho, o jumento de estimação e fiel companheiro do Chico Bento." }, { "numero": 7, "palavra": "Publicação", "dica": "O ato de produzir e lançar uma edição de um gibi." }, {"numero": 8, "palavra": "Dinossauro", "dica": "Em referência ao Horácio, o Tiranossauro Rex vegetariano e filósofo." }, {"numero": 9, "palavra": "Astronauta", "dica": "O personagem que viaja pelo espaço em sua nave redonda, o Astróide."},
{"numero": 10, "palavra": "Revistinha", "dica": "Um termo popular e muito carinhoso para se referir aos gibis."}];

// --- VARIÁVEIS GLOBAIS ---
let palavraSecreta = '';
let dicaAtual = '';
let tentativas = 0;
let maxTentativas = 6;
let tamanhoPalavra = 6;
let jogoAcabou = false;
let letrasReveladas = [];
let letrasReveladasSet = new Set();

// --- ELEMENTOS DO DOM ---
const gameBoard = document.getElementById('game-board');
const keyboardContainer = document.getElementById('keyboard');
const hintArea = document.getElementById('hint-area');
const hintButton = document.getElementById('hint-button');
const revealedHintsList = document.getElementById('revealed-hints-list');
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const menuButton = document.getElementById('menu-button');
const menuDropdown = document.getElementById('menu-dropdown');
const menuItems = document.querySelectorAll('.menu-item');
const restartButton = document.getElementById('restart-button');

// --- FUNÇÕES AUXILIARES ---

// Normaliza a palavra (remove acentos e para maiúsculas)
function normalizeWord(word) {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
}

// Reseta as cores do teclado
function resetKeyboardColors() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });
}

// Inicia ou reinicia o jogo
function initializeGame(length) {
    // Limpa o tabuleiro
    gameBoard.innerHTML = '';
    
    // Reseta as cores do teclado
    resetKeyboardColors();
    
    // Define o tamanho da palavra e número de tentativas
    tamanhoPalavra = length;
    maxTentativas = length === 6 ? 6 : length === 8 ? 8 : 10;
    
    // Escolhe uma palavra aleatória do banco de dados apropriado
    const listaPalavras = length === 6 ? listaDePalavras6Letras : 
                         length === 8 ? listaDePalavras8Letras : listaDePalavras10Letras;
    
    const palavraObj = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    palavraSecreta = normalizeWord(palavraObj.palavra);
    dicaAtual = palavraObj.dica;
    
    // Reseta as variáveis do jogo
    tentativas = 0;
    jogoAcabou = false;
    letrasReveladas = [];
    letrasReveladasSet.clear();
    
    // Limpa a lista de dicas reveladas
    revealedHintsList.innerHTML = '';
    
    // Cria o tabuleiro
    createBoard();
    
    // Atualiza o botão de modo ativo
    updateActiveModeButton();
    
    // Mostra a dica inicial
    hintArea.textContent = `Dica: ${dicaAtual}`;
}

// Cria o tabuleiro
function createBoard() {
    gameBoard.style.gridTemplateColumns = `repeat(${tamanhoPalavra}, 1fr)`;
    
    for (let i = 0; i < maxTentativas; i++) {
        for (let j = 0; j < tamanhoPalavra; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.dataset.row = i;
            tile.dataset.col = j;
            gameBoard.appendChild(tile);
        }
    }
}

// Cria o teclado virtual
function createKeyboard() {
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '>'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'APAGAR']
    ];
    
    keyboardContainer.innerHTML = '';
    
    keyboardLayout.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');
        
        row.forEach((key, keyIndex) => {
            const keyElement = document.createElement('button');
            keyElement.textContent = key;
            keyElement.classList.add('key');
            
            if (key === 'APAGAR') {
                keyElement.classList.add('delete');
                keyElement.dataset.key = 'Backspace';
                keyElement.innerHTML = '⌫';
                keyElement.title = 'Apagar';
            } else if (key === '>') {
                keyElement.classList.add('enter');
                keyElement.dataset.key = 'Enter';
                keyElement.innerHTML = '↵';
                keyElement.title = 'Enviar';
            } else {
                keyElement.dataset.key = key.toLowerCase();
            }
            
            rowElement.appendChild(keyElement);
        });
        
        keyboardContainer.appendChild(rowElement);
    });
}

// Atualiza o botão de modo ativo
function updateActiveModeButton() {
    document.querySelectorAll('.mode-button').forEach(button => {
        if (parseInt(button.dataset.length) === tamanhoPalavra) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Lida com a entrada do teclado (físico e virtual)
function handleKeyPress(key) {
    if (jogoAcabou) return;
    
    if (key === 'Enter') {
        submitGuess();
    } else if (key === 'Backspace' || key === '⌫') {
        deleteLetter();
    } else if (/^[a-zA-Z]$/.test(key)) {
        addLetter(key.toUpperCase());
    }
}

// Adiciona uma letra ao tabuleiro
function addLetter(letter) {
    const currentRow = Math.floor(tentativas);
    const tiles = document.querySelectorAll(`[data-row="${currentRow}"]`);
    const emptyTile = Array.from(tiles).find(tile => !tile.textContent);
    
    if (emptyTile) {
        emptyTile.textContent = letter;
        emptyTile.classList.add('filled');
    }
}

// Remove a última letra
function deleteLetter() {
    const currentRow = Math.floor(tentativas);
    const tiles = Array.from(document.querySelectorAll(`[data-row="${currentRow}"]`));
    const filledTiles = tiles.filter(tile => tile.textContent);
    
    if (filledTiles.length > 0) {
        const lastFilledTile = filledTiles[filledTiles.length - 1];
        lastFilledTile.textContent = '';
        lastFilledTile.classList.remove('filled');
    }
}

// Envia a tentativa
function submitGuess() {
    const currentGuess = getCurrentGuess();
    
    // Verifica se a tentativa está completa
    if (currentGuess.length < tamanhoPalavra) {
        showAlert('Palavra muito curta!');
        return;
    }
    
    // Aceita qualquer palavra do tamanho correto para melhorar a experiência infantil
    
    // Anima a linha e verifica as letras
    flipRow(currentGuess);
    
    // Verifica se o jogador ganhou
    if (currentGuess === palavraSecreta) {
        jogoAcabou = true;
        setTimeout(() => {
            showAlert('Parabéns! Você acertou!', 2000);
        }, 1500);
        return;
    }
    
    // Verifica se o jogo acabou (sem tentativas restantes)
    tentativas++;
    if (tentativas >= maxTentativas) {
        jogoAcabou = true;
        setTimeout(() => {
            showAlert(`Fim de jogo! A palavra era: ${palavraSecreta}`, 3000);
        }, 1500);
    }
}

// Pega a tentativa atual do tabuleiro
function getCurrentGuess() {
    const currentRow = Math.floor(tentativas);
    const tiles = document.querySelectorAll(`[data-row="${currentRow}"]`);
    return Array.from(tiles)
        .map(tile => tile.textContent)
        .join('')
        .toUpperCase();
}

// Anima a linha e verifica as letras
function flipRow(guess) {
    const currentRow = Math.floor(tentativas);
    const tiles = document.querySelectorAll(`[data-row="${currentRow}"]`);
    const isCorrectGuess = guess === palavraSecreta;
    
    // Se o palpite estiver correto, revela todas as letras
    if (isCorrectGuess) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            const posicao = i + 1;
            const letra = palavraSecreta[i];
            
            // Adiciona apenas se ainda não foi adicionada
            if (!letrasReveladas.some(hint => hint.posicao === posicao)) {
                letrasReveladas.push({
                    letra: letra,
                    posicao: posicao
                });
            }
        }
    } else {
        // Adiciona apenas as letras corretas nas posições corretas
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === palavraSecreta[i]) {
                if (!letrasReveladas.some(hint => hint.posicao === i + 1)) {
                    letrasReveladas.push({
                        letra: guess[i],
                        posicao: i + 1
                    });
                }
            }
        }
    }
    
    // Atualiza a lista de dicas reveladas
    updateRevealedHints();
    
    // Anima cada letra
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('flip');
            
            // Verifica a letra e aplica a classe apropriada
            const letter = tile.textContent.toUpperCase();
            
            if (letter === palavraSecreta[index]) {
                tile.classList.add('correct');
            } else if (palavraSecreta.includes(letter)) {
                tile.classList.add('present');
            } else {
                tile.classList.add('absent');
            }
            
            // Atualiza o teclado virtual
            const key = document.querySelector(`[data-key="${letter.toLowerCase()}"]`);
            if (key) {
                if (letter === palavraSecreta[index]) {
                    // Se a letra está na posição correta, sempre marca como correta
                    key.classList.remove('present', 'absent');
                    key.classList.add('correct');
                } else if (palavraSecreta.includes(letter)) {
                    // Se a letra existe na palavra mas em posição errada, só marca se não estiver já como correta
                    if (!key.classList.contains('correct')) {
                        key.classList.remove('absent');
                        key.classList.add('present');
                    }
                } else {
                    // Se a letra não existe na palavra, só marca se não estiver já como correta ou presente
                    if (!key.classList.contains('correct') && !key.classList.contains('present')) {
                        key.classList.add('absent');
                    }
                }
            }
        }, index * 300);
    });
}

// Lida com o clique no botão de dica
function handleHintClick() {
    if (jogoAcabou) return;
    
    // Se não houver letras reveladas, revela a primeira letra
    if (letrasReveladas.length === 0) {
        const primeiraLetra = palavraSecreta[0];
        // Adiciona TODAS as ocorrências da primeira letra
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === primeiraLetra) {
                letrasReveladas.push({
                    letra: primeiraLetra,
                    posicao: i + 1
                });
            }
        }
        updateRevealedHints();
        showAlert('Primeira letra revelada em todas as posições!');
        return;
    }
    
    // Encontra a próxima letra não revelada
    for (let i = 0; i < palavraSecreta.length; i++) {
        const posicao = i + 1;
        const posicaoJaRevelada = letrasReveladas.some(hint => hint.posicao === posicao);
        
        if (!posicaoJaRevelada) {
            const letra = palavraSecreta[i];
            // Adiciona TODAS as ocorrências desta letra
            for (let j = 0; j < palavraSecreta.length; j++) {
                if (palavraSecreta[j] === letra) {
                    const posicaoParaAdicionar = j + 1;
                    if (!letrasReveladas.some(h => h.posicao === posicaoParaAdicionar)) {
                        letrasReveladas.push({
                            letra: letra,
                            posicao: posicaoParaAdicionar
                        });
                    }
                }
            }
            updateRevealedHints();
            showAlert(`Letra ${letra} revelada em todas as posições!`);
            return;
        }
    }
    
    // Se todas as posições já foram reveladas
    showAlert('Todas as letras já foram reveladas!');
}

// Atualiza a exibição das letras reveladas em uma única linha
function updateRevealedHints() {
    // Cria um array com underscores para cada posição da palavra
    const display = Array(tamanhoPalavra).fill('_');
    
    // Ordena as dicas por posição para garantir a ordem correta
    const dicasOrdenadas = [...letrasReveladas].sort((a, b) => a.posicao - b.posicao);
    
    // Preenche as letras reveladas nas posições corretas
    dicasOrdenadas.forEach(hint => {
        const index = hint.posicao - 1; // Converte para índice 0-based
        if (index >= 0 && index < tamanhoPalavra) {
            // Verifica se a letra na posição atual da palavra secreta é a mesma da dica
            if (palavraSecreta[index] === hint.letra) {
                display[index] = hint.letra;
            }
        }
    });
    
    // Atualiza o texto exibido
    revealedHintsList.textContent = display.join(' ');
    
    // Debug: Mostra o estado atual no console
    console.log('Palavra secreta:', palavraSecreta);
    console.log('Letras reveladas:', letrasReveladas);
    console.log('Display:', display.join(' '));
}

// Mostra um alerta customizado
function showAlert(message, duration = 1500) {
    alertMessage.textContent = message;
    
    // Mostrar ou esconder o botão de reiniciar
    const isGameEnd = message.includes('Parabéns') || message.includes('Fim de jogo');
    restartButton.style.display = isGameEnd ? 'block' : 'none';
    
    alertModal.style.display = 'flex';
    
    // Se for uma mensagem de vitória ou derrota, não esconder automaticamente
    if (isGameEnd) {
        return; // O modal será fechado quando o usuário clicar em "Jogar Novamente"
    }
    
    // Para outras mensagens, manter o comportamento de auto-esconder
    setTimeout(() => {
        alertModal.style.display = 'none';
    }, duration);
}

// --- FUNÇÕES DE MANIPULAÇÃO DA UI ---

function toggleMenu() {
    menuDropdown.classList.toggle('show');
}

function closeMenu() {
    menuDropdown.classList.remove('show');
}

// --- EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    // Cria o teclado
    createKeyboard();
    
    // Inicia o jogo com o modo padrão (6 letras)
    initializeGame(6);
    
    // Menu hamburguer
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !menuDropdown.contains(e.target)) {
            closeMenu();
        }
    });
    
    // Itens do menu
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const length = parseInt(e.target.dataset.length);
            initializeGame(length);
            closeMenu();
        });
    });
    
    // Teclado virtual
    keyboardContainer.addEventListener('click', (e) => {
        if (e.target.matches('.key')) {
            const key = e.target.dataset.key;
            handleKeyPress(key);
        }
    });
    
    // Teclado físico
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleKeyPress('Enter');
        } else if (e.key === 'Backspace') {
            handleKeyPress('Backspace');
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            handleKeyPress(e.key);
        }
    });
    
    // Botão de dica
    hintButton.addEventListener('click', handleHintClick);
    
    // Botão de reiniciar no modal
    restartButton.addEventListener('click', () => {
        alertModal.style.display = 'none';
        initializeGame(tamanhoPalavra);
    });
});
