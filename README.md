# YTÜ Erasmus+ Chatbot

Yıldız Teknik Üniversitesi Erasmus programı için Dify ve Botpress chatbot entegrasyonu.
Web sitesi linki: https://extraordinary-kelpie-87357b.netlify.app/

## Çalıştırma

Proje klasöründe terminal açıp şu komutu çalıştırın:

```bash
npx -y serve .
```

Sonra tarayıcıda `http://localhost:3000` adresini açın.

> Not: Siteyi doğrudan dosya olarak açarsanız (`file://`) chatbot'lar yüklenmez, sunucu üzerinden açmanız gerekiyor.

## Dosyalar

- `index.html` - Ana sayfa
- `styles.css` - Stiller
- `app.js` - Chatbot kontrolleri
- `dify.html` - Dify embed
- `botpress.html` - Botpress embed

## Chatbot Token Değiştirme

Kendi chatbot'unuzu kullanmak için:

**Dify:** `dify.html` içindeki iframe src'sini değiştirin  
**Botpress:** `botpress.html` içindeki script src'sini değiştirin

