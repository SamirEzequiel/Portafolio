/**
 * Manejo del header y efecto de desvanecimiento
 * Este script controla el comportamiento del título "Portafolio" al hacer scroll
 */
document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.querySelector('.header-title');
    let lastScroll = 0;
    const scrollThreshold = 50;
    let ticking = false;

    /**
     * Función que maneja el comportamiento del header al hacer scroll
     * Oculta el título cuando se hace scroll hacia abajo
     * Muestra el título cuando se hace scroll hacia arriba o se está en la parte superior
     */
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const isScrollingDown = currentScroll > lastScroll && currentScroll > scrollThreshold;

        if (isScrollingDown) {
            headerTitle.style.opacity = '0';
            headerTitle.style.transform = 'translateY(-20px)';
        } else {
            headerTitle.style.opacity = '1';
            headerTitle.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    }

    // Optimización del scroll usando requestAnimationFrame
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
