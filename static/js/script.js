    // Función para cambiar el rol en el formulario de registro
    function setRole(role) {
    const clientTab = document.getElementById('tab-client');
    const technicianTab = document.getElementById('tab-technician');
    const roleInput = document.getElementById('role-input');
    
    if (!clientTab || !technicianTab || !roleInput) return;
    
    roleInput.value = role;
    
    if (role === 'cliente') {
        clientTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
        clientTab.classList.remove('text-blue-200', 'hover:text-white');
        technicianTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
        technicianTab.classList.add('text-blue-200', 'hover:text-white');
    } else {
        technicianTab.classList.add('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
        technicianTab.classList.remove('text-blue-200', 'hover:text-white');
        clientTab.classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-cyan-500', 'text-white');
        clientTab.classList.add('text-blue-200', 'hover:text-white');
    }
    }

    // Inicialización cuando el DOM está listo
    document.addEventListener('DOMContentLoaded', function() {
    console.log('JOSETEC - Sistema de Reparaciones cargado');

    // Inicializar select personalizado para Estado de la Orden
    document.querySelectorAll('[data-status-select]').forEach((container) => {
        const hiddenInput = container.querySelector('input[type="hidden"][name="status"]');
        const trigger = container.querySelector('.custom-select-trigger');
        const menu = container.querySelector('.custom-select-menu');
        const label = container.querySelector('.current-status');
        const options = container.querySelectorAll('.custom-select-option');

        if (!hiddenInput || !trigger || !menu || !label) return;

        const forceReflow = (el) => el.getBoundingClientRect();

        const openMenu = () => {
        if (!menu.classList.contains('hidden')) return;
        // Preparar para animación
        menu.classList.remove('hidden');
        menu.style.overflow = 'hidden';
        menu.style.maxHeight = '0px';
        trigger.setAttribute('aria-expanded', 'true');
        container.classList.add('open');
        forceReflow(menu);
        const target = Math.min(menu.scrollHeight, 240); // coincide con max-h-60 (~240px)
        menu.style.maxHeight = target + 'px';
        // Al terminar, permitir scroll
        const onEnd = (e) => {
            if (e.propertyName !== 'max-height') return;
            menu.style.overflow = 'auto';
            menu.removeEventListener('transitionend', onEnd);
        };
        menu.addEventListener('transitionend', onEnd);
        };

        const closeMenu = () => {
        if (menu.classList.contains('hidden')) return;
        // Animar hacia arriba
        menu.style.overflow = 'hidden';
        const current = menu.scrollHeight;
        menu.style.maxHeight = current + 'px';
        forceReflow(menu);
        menu.style.maxHeight = '0px';
        trigger.setAttribute('aria-expanded', 'false');
        const onEnd = (e) => {
            if (e.propertyName !== 'max-height') return;
            menu.classList.add('hidden');
            container.classList.remove('open');
            menu.removeEventListener('transitionend', onEnd);
        };
        menu.addEventListener('transitionend', onEnd);
        };
        const toggleMenu = (e) => {
        e.stopPropagation();
        if (menu.classList.contains('hidden')) openMenu(); else closeMenu();
        };

        const selectValue = (value, text, clickedOption) => {
        hiddenInput.value = value;
        label.textContent = text;
        options.forEach(o => {
            o.setAttribute('aria-selected', 'false');
            o.classList.remove('bg-white/15');
        });
        if (clickedOption) {
            clickedOption.setAttribute('aria-selected', 'true');
            clickedOption.classList.add('bg-white/15');
        }
        closeMenu();
        };

        trigger.addEventListener('click', toggleMenu);
        document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) closeMenu();
        });
        const getOptionsArray = () => Array.from(options);
        const getSelectedIndex = () => getOptionsArray().findIndex(o => o.getAttribute('aria-selected') === 'true');

        trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeMenu(); return; }
        const opts = getOptionsArray();
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (menu.classList.contains('hidden')) { openMenu(); return; }
            let i = getSelectedIndex();
            i = Math.min(opts.length - 1, i + 1);
            opts[i].scrollIntoView({ block: 'nearest' });
            selectValue(opts[i].dataset.value, opts[i].textContent, opts[i]);
            openMenu();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (menu.classList.contains('hidden')) { openMenu(); return; }
            let i = getSelectedIndex();
            i = Math.max(0, i - 1);
            opts[i].scrollIntoView({ block: 'nearest' });
            selectValue(opts[i].dataset.value, opts[i].textContent, opts[i]);
            openMenu();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (menu.classList.contains('hidden')) openMenu(); else closeMenu();
        }
        });
        options.forEach(opt => {
        opt.addEventListener('click', () => selectValue(opt.dataset.value, opt.textContent, opt));
        });
    });

    // --- Delete confirmation modal handling ---
    const deleteModal = document.getElementById('deleteModal');
    const deleteModalCode = document.getElementById('deleteModalCode');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    let _pendingDeleteForm = null;

    const openDeleteModal = (form, code) => {
        _pendingDeleteForm = form;
        if (deleteModalCode) deleteModalCode.textContent = code || '';
        if (deleteModal) deleteModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    };
    const closeDeleteModal = () => {
        _pendingDeleteForm = null;
        if (deleteModal) deleteModal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    };

    // Attach to all forms with class 'delete-order-form'
    document.querySelectorAll('form.delete-order-form').forEach((f) => {
        f.addEventListener('submit', (e) => {
            e.preventDefault();
            const code = f.dataset.orderCode || '';
            openDeleteModal(f, code);
        });
    });

    if (confirmDeleteBtn) confirmDeleteBtn.addEventListener('click', (e) => {
        if (_pendingDeleteForm) {
            // Submit the form programmatically
            _pendingDeleteForm.submit();
        }
    });
    if (cancelDeleteBtn) cancelDeleteBtn.addEventListener('click', (e) => {
        closeDeleteModal();
    });

    // Close modal with Escape or clicking outside
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && _pendingDeleteForm) closeDeleteModal();
    });
    if (deleteModal) {
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) closeDeleteModal();
        });
    }

    // --- Toggle password visibility ---
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            const eyeOpen = this.querySelector('.eye-open');
            const eyeClosed = this.querySelector('.eye-closed');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeClosed.classList.add('hidden');
                eyeOpen.classList.remove('hidden');
            } else {
                input.type = 'password';
                eyeClosed.classList.remove('hidden');
                eyeOpen.classList.add('hidden');
            }
        });
    });

    // --- Password match validation for register form ---
    const registerForm = document.querySelector('form[action*="register"]');
    if (registerForm) {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        
        if (passwordInput && confirmPasswordInput) {
            const validatePasswords = () => {
                if (confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
                    confirmPasswordInput.setCustomValidity('Las contraseñas no coinciden');
                } else {
                    confirmPasswordInput.setCustomValidity('');
                }
            };
            
            passwordInput.addEventListener('input', validatePasswords);
            confirmPasswordInput.addEventListener('input', validatePasswords);
            
            registerForm.addEventListener('submit', (e) => {
                validatePasswords();
                if (passwordInput.value !== confirmPasswordInput.value) {
                    e.preventDefault();
                    confirmPasswordInput.focus();
                }
            });
        }
    }

    // --- Mobile menu toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }
    });
