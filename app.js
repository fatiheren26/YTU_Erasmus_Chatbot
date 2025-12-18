// YTÜ Erasmus Chatbot Controller
// Dify ve Botpress chatbot URL'leri (yerel HTML sayfaları)
const CHATBOT_URLS = {
    dify: 'dify.html',
    botpress: 'botpress.html'
};

document.addEventListener('DOMContentLoaded', function () {

    // Elements
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenTitle = document.getElementById('fullscreenTitle');
    const closeFullscreen = document.getElementById('closeFullscreen');
    const chatbotIframe = document.getElementById('chatbotIframe');

    const chatBubbleWidget = document.getElementById('chatBubbleWidget');
    const chatBubbleBtn = document.getElementById('chatBubbleBtn');
    const bubbleChatWindow = document.getElementById('bubbleChatWindow');
    const minimizeBubble = document.getElementById('minimizeBubble');
    const bubbleIframe = document.getElementById('bubbleIframe');
    const botTabs = document.querySelectorAll('.bot-tab');

    // Header buttons
    const openDifyFullscreen = document.getElementById('openDifyFullscreen');
    const openBotpressFullscreen = document.getElementById('openBotpressFullscreen');
    const startChatHero = document.getElementById('startChatHero');

    // Current active bot in bubble (default: dify)
    let currentBubbleBot = 'dify';

    // Initialize bubble with Dify
    loadBubbleChat('dify');

    // ========== BALONCUK (BUBBLE) KONTROLLERI ==========

    // Baloncuk butonuna tıklama - aç/kapa
    chatBubbleBtn.addEventListener('click', function () {
        chatBubbleWidget.classList.toggle('open');

        // İlk açılışta iframe yükle
        if (chatBubbleWidget.classList.contains('open') && !bubbleIframe.src) {
            loadBubbleChat(currentBubbleBot);
        }
    });

    // Minimize butonu
    minimizeBubble.addEventListener('click', function () {
        chatBubbleWidget.classList.remove('open');
    });

    // Bot tab seçimi (baloncuk içinde)
    botTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const bot = this.dataset.bot;

            // Aktif tab'ı güncelle
            botTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Bot değiştir
            currentBubbleBot = bot;
            loadBubbleChat(bot);
        });
    });

    // Baloncuk chat'i yükle
    function loadBubbleChat(bot) {
        bubbleIframe.src = CHATBOT_URLS[bot];
    }

    // ========== TAM SAYFA MODAL KONTROLLERI ==========

    // Header - Dify Fullscreen
    openDifyFullscreen.addEventListener('click', function () {
        openFullscreenChat('dify');
    });

    // Header - Botpress Fullscreen
    openBotpressFullscreen.addEventListener('click', function () {
        openFullscreenChat('botpress');
    });

    // Hero - Chat butonu (Dify varsayılan)
    startChatHero.addEventListener('click', function () {
        openFullscreenChat('dify');
    });

    // Fullscreen modal kapat
    closeFullscreen.addEventListener('click', function () {
        fullscreenModal.classList.remove('active');
        chatbotIframe.src = ''; // iframe temizle
    });

    // ESC tuşu ile kapat
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && fullscreenModal.classList.contains('active')) {
            fullscreenModal.classList.remove('active');
            chatbotIframe.src = '';
        }
    });

    // ========== NAVIGATION ==========

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// ========== GLOBAL FONKSIYONLAR ==========

// Tam sayfa chatbot aç
function openFullscreenChat(bot) {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenTitle = document.getElementById('fullscreenTitle');
    const chatbotIframe = document.getElementById('chatbotIframe');

    // Başlık güncelle
    if (bot === 'dify') {
        fullscreenTitle.textContent = '💬 Dify Erasmus Asistanı';
    } else {
        fullscreenTitle.textContent = '🤖 Botpress Asistanı';
    }

    // iframe'i yükle
    chatbotIframe.src = CHATBOT_URLS[bot];

    // Modal aç
    fullscreenModal.classList.add('active');
}
