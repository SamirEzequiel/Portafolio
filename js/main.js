/**
 * Manejo del header y efecto de desvanecimiento
 * Este script controla el comportamiento del título "Portafolio" al hacer scroll
 */
document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.querySelector('.header-title');
    let lastScroll = 0;
    const scrollThreshold = 50;

    /**
     * Función que maneja el comportamiento del header al hacer scroll
     * Oculta el título cuando se hace scroll hacia abajo
     * Muestra el título cuando se hace scroll hacia arriba o se está en la parte superior
     */
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const isScrollingDown = currentScroll > lastScroll && currentScroll > 0;

        if (currentScroll > scrollThreshold && isScrollingDown) {
            headerTitle.classList.add('hidden');
        } else {
            headerTitle.classList.remove('hidden');
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Optimización del scroll usando requestAnimationFrame
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Inicializar el estado del header
    handleScroll();
});

/**
 * Función para mostrar notificaciones temporales
 * @param {string} message - El mensaje a mostrar
 * @param {string} type - El tipo de notificación (info, success, error)
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
