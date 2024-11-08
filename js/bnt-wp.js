(function() {
    // Crear el HTML del botón y el mensaje
    const container = document.getElementById('wp-float-container');
    container.innerHTML = `
        <div class="wp-float-message" id="wp-float-message"></div>
        <a href="https://wa.link/au4hmg" target="_blank" class="wp-float-btn" aria-label="Chatea por WhatsApp">
            <svg class="wp-float-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.784 23.456l4.5-1.442C7.236 23.306 9.546 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.067 19.5c-1.621 0-3.158-.41-4.494-1.132l-3.142 1.008 1.032-3.07A7.444 7.444 0 014.5 12c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z"/>
            </svg>
        </a>
    `;

    // Variables encapsuladas
    const messagesList = [
        'Nuestra asesoría es gratuita',
        '¿Necesitas mejorar la velocidad de tu web?',
        'Creamos páginas web a tu medida',
        'Optimizamos tu web',
        'Tenemos SEO técnico y mejoramos las métricas',
        '¿Tienes ataques en tu web?',
        '¿Necesitas un diagnostico? En Tech Tecnic es gratuito'
    ];

    let currentIndex = 0;
    const messageElement = document.getElementById('wp-float-message');

    function showMessage() {
        if (!messageElement) return;
        
        messageElement.textContent = messagesList[currentIndex];
        messageElement.classList.add('show');
        
        setTimeout(() => {
            messageElement.classList.remove('show');
            currentIndex = (currentIndex + 1) % messagesList.length;
        }, 25000);
    }

    // Iniciar los mensajes después de 10 segundos
    setTimeout(() => {
        showMessage();
        // Mostrar nuevo mensaje cada 30 segundos
        setInterval(showMessage, 30000);
    }, 10000);
})();
