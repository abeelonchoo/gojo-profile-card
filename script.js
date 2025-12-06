
        const card = document.getElementById('card');
        const bunny = document.getElementById('bunny');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // posición X dentro del elemento
            const y = e.clientY - rect.top;  // posición Y dentro del elemento
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcular rotación (entre -15 y 15 grados)
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        bunny.addEventListener('mouseleave', () => {
            bunny.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });

            bunny.addEventListener('mousemove', (e) => {
            const rect = bunny.getBoundingClientRect();
            const x = e.clientX - rect.left; // posición X dentro del elemento
            const y = e.clientY - rect.top;  // posición Y dentro del elemento
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calcular rotación (entre -15 y 15 grados)
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            bunny.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        bunny.addEventListener('mouseleave', () => {
            bunny.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });