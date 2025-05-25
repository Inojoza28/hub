    // Controle do Menu Mobile - Versão Aprimorada
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const topLine = document.getElementById('top-line');
        const middleLine = document.getElementById('middle-line');
        const bottomLine = document.getElementById('bottom-line');
        
        let isMenuOpen = false;

        // Função para abrir o menu
        const openMenu = () => {
            // Animar para X
            topLine.style.top = '10px';
            topLine.style.transform = 'rotate(45deg)';
            
            middleLine.style.opacity = '0';
            middleLine.style.transform = 'translateX(-10px)';
            
            bottomLine.style.top = '10px';
            bottomLine.style.transform = 'rotate(-45deg)';
            
            // Mostrar menu
            mobileMenu.classList.remove('hidden');
            
            // Pequeno atraso para garantir que a animação seja visível
            setTimeout(() => {
                mobileMenu.classList.remove('-translate-y-2', 'opacity-0');
                mobileMenu.classList.add('translate-y-0', 'opacity-100');
            }, 10);
            
            isMenuOpen = true;
        };

        // Função para fechar o menu
        const closeMenu = () => {
            // Animar para hamburger
            topLine.style.top = '0';
            topLine.style.transform = 'rotate(0)';
            
            middleLine.style.opacity = '1';
            middleLine.style.transform = 'translateX(0)';
            
            bottomLine.style.top = '20px';
            bottomLine.style.transform = 'rotate(0)';
            
            // Esconder menu com animação
            mobileMenu.classList.remove('translate-y-0', 'opacity-100');
            mobileMenu.classList.add('-translate-y-2', 'opacity-0');
            
            // Esconder completamente após a animação
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            
            isMenuOpen = false;
        };

        // Função para alternar o menu
        const toggleMenu = () => {
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        };

        // Event Listeners
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                closeMenu();
            }
        });

        // Fechar ao rolar a página
        window.addEventListener('scroll', () => {
            if (isMenuOpen) {
                closeMenu();
            }
        });
        
        // Fechar ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (isMenuOpen && window.innerWidth >= 768) { // 768px é o breakpoint md do Tailwind
                closeMenu();
            }
        });
        
        // Prevenir propagação de cliques dentro do menu
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });