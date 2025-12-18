# 🎓 YTÜ Erasmus+ Chatbot Asistanı

Yıldız Teknik Üniversitesi Erasmus+ programı için yapay zeka destekli chatbot entegrasyonu. Dify ve Botpress chatbot'larını tek bir arayüzde birleştiren modern web sitesi.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📸 Ekran Görüntüleri

### Ana Sayfa
Modern dark theme tasarım ile Erasmus+ bilgileri ve chatbot entegrasyonu.

### Chatbot Özellikleri
- **Baloncuk Chat:** Sağ alt köşede tek tıkla erişim
- **Bot Seçimi:** Dify ve Botpress arasında geçiş
- **Tam Sayfa Modal:** ChatGPT benzeri sohbet deneyimi

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (opsiyonel, local server için)
- Modern web tarayıcı (Chrome, Firefox, Edge vb.)

### Hızlı Başlangıç

1. **Repoyu klonlayın:**
   ```bash
   git clone https://github.com/KULLANICI_ADI/ytu-erasmus-chatbot.git
   cd ytu-erasmus-chatbot
   ```

2. **Local server başlatın:**
   ```bash
   npx -y serve .
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

> ⚠️ **Önemli:** Chatbot'ların çalışması için siteyi bir web sunucusu üzerinden açmanız gerekir. Doğrudan dosya olarak (`file://`) açarsanız iframe'ler yüklenmez.

### Alternatif Çalıştırma Yöntemleri

**Python ile:**
```bash
python -m http.server 3000
```

**PHP ile:**
```bash
php -S localhost:3000
```

**VS Code Live Server:**
VS Code'da Live Server eklentisini kullanabilirsiniz.

## 📁 Dosya Yapısı

```
ytu-erasmus-chatbot/
├── index.html       # Ana sayfa
├── styles.css       # CSS stilleri (dark theme, glassmorphism)
├── app.js           # JavaScript - chatbot kontrolleri
├── dify.html        # Dify chatbot embed sayfası
├── botpress.html    # Botpress chatbot embed sayfası
└── README.md        # Bu dosya
```

## 🎯 Özellikler

### Chatbot Entegrasyonu
| Özellik | Açıklama |
|---------|----------|
| **Dify Chatbot** | Erasmus+ odaklı AI asistanı |
| **Botpress Chatbot** | Genel destek botu |
| **Baloncuk Widget** | Sağ alt köşede tek tıkla erişim |
| **Bot Seçici** | Dify/Botpress arası kolay geçiş |
| **Tam Sayfa Modal** | ChatGPT benzeri deneyim |

### Tasarım
- 🌙 Dark mode tasarım
- 💎 Glassmorphism efektleri
- 🎨 Gradient renkler
- 📱 Responsive (mobil uyumlu)
- ✨ Smooth animasyonlar

## ⚙️ Yapılandırma

### Dify Chatbot Token'ını Değiştirme

`dify.html` dosyasında:
```html
<iframe src="https://udify.app/chatbot/SIZIN_TOKEN_KODUNUZ" allow="microphone"></iframe>
```

### Botpress Bot ID'sini Değiştirme

`botpress.html` dosyasında:
```html
<script src="https://files.bpcontent.cloud/SIZIN_CONFIG_DOSYANIZ.js"></script>
```

## 🛠️ Teknolojiler

- **HTML5** - Semantik yapı
- **CSS3** - Modern stiller, custom properties, flexbox/grid
- **Vanilla JavaScript** - Framework bağımsız
- **Dify** - AI chatbot platformu
- **Botpress** - Conversational AI platformu

## 📝 Kullanım

### Baloncuk Chat
1. Sağ alt köşedeki 💬 butonuna tıklayın
2. Chat penceresi açılır (varsayılan: Dify)
3. Üstteki sekmelerden Dify/Botpress arasında geçiş yapın
4. Sorunuzu yazın ve Enter'a basın

### Tam Sayfa Chat
1. Header'daki "💬 Dify" veya "🤖 Botpress" butonuna tıklayın
2. Tam sayfa modal açılır
3. ChatGPT benzeri arayüzde sohbet edin
4. ✕ ile kapatın

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Commit'leyin (`git commit -m 'Yeni özellik eklendi'`)
4. Push'layın (`git push origin feature/YeniOzellik`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Proje:** YTÜ Erasmus+ Chatbot
- **Üniversite:** Yıldız Teknik Üniversitesi
- **E-posta:** erasmus@yildiz.edu.tr

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
