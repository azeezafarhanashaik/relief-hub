document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('chat-modal');
    const closeBtn = document.querySelector('.close-btn');
    const whatsappFrame = document.getElementById('whatsapp-frame');
    const topicCards = document.querySelectorAll('.topic-card');

    // Open chat modal when clicking on a topic
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const chatUrl = card.dataset.chat;
            whatsappFrame.src = chatUrl;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        whatsappFrame.src = '';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            whatsappFrame.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Add hover effect to topic cards
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});