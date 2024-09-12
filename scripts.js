// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const btnOpen = document.getElementById('btn-menu');
    const btnClose = document.getElementById('btn-fechar');
    const sidebar = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    // Função para abrir a barra lateral
    btnOpen.addEventListener('click', function() {
        sidebar.style.width = '250px'; // Largura da barra lateral ao abrir
        overlay.style.display = 'block'; // Exibe o overlay
    });

    // Função para fechar a barra lateral
    btnClose.addEventListener('click', function() {
        sidebar.style.width = '0'; // Fecha a barra lateral
        overlay.style.display = 'none'; // Oculta o overlay
    });

    // Fecha a barra lateral ao clicar no overlay
    overlay.addEventListener('click', function() {
        sidebar.style.width = '0';
        overlay.style.display = 'none';
    });
});
