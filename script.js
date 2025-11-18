// ==========================================================
// DADOS DAS SUBPÁGINAS
// É AQUI QUE VOCÊ CONFIGURA O CONTEÚDO DE CADA POP-UP
// ==========================================================

const subpageData = {
    'familia': {
        title: '👨‍👩‍👧‍👦 Minha Família',
        content: '<p>Um texto especial sobre sua família. Você pode falar dos seus pais, irmãos e sobrinhos aqui.</p>',
        // Coloque os nomes das fotos da sua família aqui (ex: 'foto_familia1.jpeg')
        images: ['meus amores.jpeg', 'eu 2.jpeg', 'euchefe.jpeg'] 
    },
    'maria-luiza': {
        title: '💕 Maria Luiza',
        content: '<p>Um texto especial para a Maria Luiza. ❤️</p>',
         // Coloque os nomes das fotos com a Maria Luiza aqui
        images: ['mb2.jpeg', 'diva.jpeg']
    },
    'miguel': {
        title: '👶 Miguel (Afilhado)',
        content: '<p>Meu afilhado querido, Miguel Alencar Keller. 👶💙</p>',
         // Coloque os nomes das fotos do Miguel aqui
        images: ['miguel123.jpeg', 'belha.jpeg'] 
    },
    'futebol': {
        title: '⚽ Futebol',
        content: '<p>Momentos da paixão pelo futebol, jogando pelo Alvorada!</p>',
         // Coloque os nomes das fotos de futebol aqui
        images: ['alvorada.jpeg']
    },
    'galeria': {
        title: '📷 Amigos',
        content: '<p>Registros de momentos especiais com os amigos.</p>',
         // Coloque os nomes das fotos com amigos aqui
        images: ['trcs.jpeg', 'passarinhos.jpeg']
    },
    'igreja': { // <-- Esta é a nova seção
        title: '⛪ Igreja',
        content: '<p>Um pouco sobre minha caminhada na fé e a comunidade da igreja.</p>',
         // Coloque os nomes das fotos da igreja aqui
        images: ['eu,igreja.jpeg'] 
    }
};


// ==========================================================
// FUNÇÕES DO SITE (NÃO PRECISA EDITAR DAQUI PARA BAIXO)
// ==========================================================

/**
 * Função para rolar o carrossel de fotos
 */
function scrollCarousel(direction) {
    const carousel = document.getElementById('photo-carousel');
    if (!carousel) return;

    // Calcula o quanto rolar (metade da largura visível do carrossel)
    const scrollAmount = carousel.clientWidth / 2;

    if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

/**
 * Função para fechar a subpágina (pop-up)
 */
function closeSubpage() {
    const overlay = document.getElementById('subpage-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

/**
 * Função para ABRIR e PREENCHER a subpágina (pop-up)
 */
function showSection(sectionId) {
    // 1. Pega os dados da seção clicada
    const data = subpageData[sectionId];
    if (!data) {
        console.error('Dados não encontrados para a seção:', sectionId);
        return;
    }

    // 2. Pega os elementos do HTML que vão ser alterados
    const overlay = document.getElementById('subpage-overlay');
    const titleEl = document.getElementById('subpage-title');
    const contentEl = document.getElementById('subpage-content');
    const galleryEl = document.getElementById('subpage-gallery');

    // 3. Verifica se todos os elementos existem
    if (!overlay || !titleEl || !contentEl || !galleryEl) {
        console.error('Elementos do pop-up não encontrados no HTML.');
        return;
    }

    // 4. Preenche o pop-up com os dados
    titleEl.innerHTML = data.title;
    contentEl.innerHTML = data.content;

    // 5. Limpa a galeria antiga e cria as novas fotos
    galleryEl.innerHTML = ''; // Limpa fotos anteriores
    
    if (data.images && data.images.length > 0) {
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            // Adiciona classes do Tailwind para estilizar as fotos da galeria
            img.className = 'rounded-lg object-cover w-full h-auto shadow-md'; 
            galleryEl.appendChild(img);
        });
    } else {
        galleryEl.innerHTML = '<p class="text-gray-500">Nenhuma foto adicionada nesta galeria ainda.</p>';
    }

    // 6. Mostra o pop-up
    overlay.classList.remove('hidden');
}