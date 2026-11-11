# Personal_Website

Murodulla Shonazarov — shaxsiy portfolio sayt (UZ / EN).

## Fayllar

| Fayl | Vazifasi |
|---|---|
| `index.html` | Sahifa tuzilishi (bo'limlar) |
| `style.css` | Dizayn: ranglar, shriftlar, joylashuv |
| `script.js` | Ma'lumotlarni sahifaga chiqarish, til almashtirish, filtrlar |
| `data.js` | **Barcha ma'lumotlar** — loyihalar, sertifikatlar, havolalar, matnlar |

## Saytni ochish

`index.html` ustiga ikki marta bos — brauzerda ochiladi.
VS Code'da ishlasang, **Live Server** kengaytmasini o'rnatib, `index.html` → o'ng tugma → *Open with Live Server*: har saqlaganingda sahifa o'zi yangilanadi.

## Yangi narsa qo'shish

Faqat `data.js` ni tahrirlaysan:

- **Loyiha** → `projects` ro'yxatiga yangi `{ ... }` blok.
- **Sertifikat / yutuq** → `journey` ro'yxatiga yangi yozuv (`type: "certificate"` yoki `"achievement"`).
- **Aloqa** → `links` ichiga Telegram, LinkedIn, GitHub, email.

`example: true` belgisi bor yozuvlar — namuna. Haqiqiy ma'lumot qo'shganingda ularni o'chir.
