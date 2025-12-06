const audio = new Audio('audio.mp3');
audio.loop = true;
audio.volume = 0.5;


audio.play().catch(() => {
    
    document.addEventListener('click', () => {
        audio.play();
    }, { once: true });
});

document.getElementById('play-overlay').addEventListener('click', function() {
    this.style.display = 'none';
});
      
      
      
      
      const card = document.getElementById('card');
        const bunny = document.getElementById('bunny');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top; 
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
          
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        bunny.addEventListener('mouseleave', () => {
            bunny.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });

            bunny.addEventListener('mousemove', (e) => {
            const rect = bunny.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
     
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            bunny.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        bunny.addEventListener('mouseleave', () => {
            bunny.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });