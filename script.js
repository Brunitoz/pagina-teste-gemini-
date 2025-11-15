// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Encontra o botão pelo seu ID
    const botao = document.getElementById('meuBotao');

    // 2. Adiciona um "ouvidor" de evento de clique
    // Isso diz ao navegador: "Ei, quando este botão for clicado, faça isso:"
    botao.addEventListener('click', function() {
        
        // 3. A ação que acontece ao clicar
        alert('Olá, Bruno! O JavaScript está funcionando! 🎉');
        
    });

});
