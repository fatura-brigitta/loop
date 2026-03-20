# 🎬 LOOP – Mozi Rendszer

# 📑 Tartalomjegyzék

- [🎬 LOOP – Mozi Rendszer](#-loop--mozi-rendszer)
- [🌐 Online elérhetőség](#-online-elérhetőség)
- [📌 A projekt fő funkciói](#-a-projekt-fő-funkciói)
- [✨ Rövid működési áttekintés](#-rövid-működési-áttekintés)
- [📱 QR-kódos jegyellenőrző mobilalkalmazás](#-qr-kódos-jegyellenőrző-mobilalkalmazás)
- [🧩 Fő modulok](#-fő-modulok)
- [🛠️ Felhasznált technológiák](#️-felhasznált-technológiák)
- [🧱 Rendszerarchitektúra](#-rendszerarchitektúra)
- [🚀 Telepítés](#-telepítés)
- [▶️ Futtatás](#️-futtatás)
- [📚 API dokumentáció](#-api-dokumentáció)
- [🧪 Tesztelés](#-tesztelés)
- [👤 Bejelentkezés és felhasználói rendszer](#-bejelentkezés-és-felhasználói-rendszer)
- [🎟️ Jegyvásárlási folyamat](#️-jegyvásárlási-folyamat)
- [💬 Fórum és közösségi funkciók](#-fórum-és-közösségi-funkciók)
- [🏆 Pont- és rangrendszer](#-pont--és-rangrendszer)
- [🛠️ Admin felület](#️-admin-felület)
- [🗄️ Adatbázis inicializálása](#️-adatbázis-inicializálása)
- [👨‍💻 Készítők](#-készítők)

A **LOOP** egy modern webes mozirendszer, amely lehetővé teszi a felhasználók számára, hogy online filmeket böngésszenek, vetítéseket válasszanak, helyeket foglaljanak, valamint jegyeket vásároljanak.

A projekt célja egy valós mozi működésének digitális megvalósítása, ahol a felhasználói élmény középpontjában a gyors és kényelmes **jegyvásárlás** és **helyfoglalás** áll. A rendszer ezen kívül több kiegészítő funkciót is tartalmaz, például felhasználói profilt, közösségi fórumot, pontgyűjtési és rangrendszert, kuponokat és kedvezményeket, valamint egy adminisztrációs felületet a mozi kezeléséhez.

A rendszer része továbbá egy **QR-kód alapú jegyellenőrző megoldás** is, amely egy külön mobilalkalmazáson keresztül működik. A mozijegyek egyedi QR-kóddal rendelkeznek, amelyeket a mozi dolgozói a beléptetésnél egy **.NET MAUI alapú mobilalkalmazás segítségével** tudnak beolvasni és ellenőrizni.

---

# 🌐 Online elérhetőség

A projekt publikus verziója **Vercelen** elérhető.

Az alkalmazás itt érhető el:

🔗 https://loop-sooty.vercel.app

Az API dokumentáció (Swagger) online is elérhető:

🔗 https://loop-sooty.vercel.app/docs

A Swagger felületen az összes API endpoint megtekinthető és kipróbálható.

---

# 📌 A projekt fő funkciói

A rendszer az alábbi főbb funkciókat tartalmazza:

- 🎥 filmek böngészése
- 🕒 vetítések listázása
- 💺 interaktív székfoglalás
- 🎟️ online jegyvásárlás
- 💳 Stripe alapú fizetés
- 📧 emailben küldött QR-kódos mozijegyek
- 📱 QR-kódos jegyellenőrzés mobilalkalmazással
- 👤 felhasználói profilkezelés
- 🔐 emailes regisztráció és hitelesítés
- 🔵 Google és Facebook alapú bejelentkezés
- 💬 fórum a filmekhez kapcsolódó hozzászólásokkal
- 👍 posztok értékelése like / dislike rendszerrel
- 🏆 pontgyűjtési és rangrendszer
- 🎫 kuponok és kedvezmények kezelése
- 🛠️ admin felület filmek, termek és vetítések kezelésére

---

# ✨ Rövid működési áttekintés

A felhasználó a kezdőoldalon filmeket böngészhet, majd kiválaszthat egy vetítést. Ezután megjelenik a terem ülésrendje, ahol kiválaszthatja a kívánt helyeket. A rendszer kiszámolja a jegyek árát, majd a felhasználó online fizetéssel véglegesítheti a vásárlást.

A sikeres fizetés után a jegyek **QR-kódos formában kerülnek kiküldésre emailben**.

A mozi bejáratánál a jegyek ellenőrzése **QR-kód szkennerrel történik**, amely egy külön mobilalkalmazásban fut.

---

# 📱 QR-kódos jegyellenőrző mobilalkalmazás

A rendszerhez tartozik egy külön **mobilalkalmazás**, amelyet a mozi dolgozói használhatnak a jegyek ellenőrzésére.

A mobilalkalmazás technológiája:

**.NET MAUI**

A mobilalkalmazás funkciói:

- QR-kód szkennelése
- jegy ellenőrzése a backend API segítségével
- a jegy adatainak megjelenítése
- annak ellenőrzése, hogy a jegyet már felhasználták-e

A rendszer megakadályozza, hogy ugyanazt a jegyet többször használják fel.

---

# 🧩 Fő modulok

| Modul | Rövid leírás |
|---|---|
| **Filmek** | A jelenleg vetített filmek böngészése |
| **Vetítések** | A kiválasztott filmhez tartozó vetítések listázása |
| **Székfoglalás** | Interaktív ülésválasztás a terem alapján |
| **Jegyvásárlás** | Online fizetés és jegyek létrehozása |
| **Email rendszer** | Email-hitelesítés, visszaigazolás, jegyküldés |
| **Fórum** | Hozzászólások, válaszok, értékelések |
| **Profil** | Felhasználói adatok, rangok, pontok, kuponok |
| **Admin** | Filmek, termek, vetítések és moderáció kezelése |
| **QR szkenner** | Jegyek beolvasása mobilalkalmazással |
| **Swagger** | REST API dokumentáció és endpoint tesztelés |

---

# 🛠️ Felhasznált technológiák

| Technológia | Szerepe |
|---|---|
| **Next.js** | Frontend és backend keretrendszer |
| **React** | Felhasználói felület |
| **TypeScript** | Típusos fejlesztés |
| **Prisma ORM** | Adatbázis-kezelés |
| **MongoDB** | Adattárolás |
| **Stripe** | Online fizetés |
| **Nodemailer** | Email küldés |
| **Swagger UI** | API dokumentáció |
| **Tailwind CSS** | UI stílus |
| **DaisyUI** | UI komponensek |
| **bcryptjs** | Jelszavak titkosítása |
| **QRCode** | QR-kód generálás |
| **Cypress e2e** | Tesztelés |
| **.NET MAUI** | Mobil QR-kód szkenner alkalmazás |

---

# 🧱 Rendszerarchitektúra

A rendszer több komponensből áll:

- **Webalkalmazás (Next.js)**
- **REST API**
- **MongoDB adatbázis**
- **Stripe fizetési rendszer**
- **Email rendszer**
- **Mobil QR-szkenner alkalmazás (.NET MAUI)**

A mobilalkalmazás a backend API-n keresztül kommunikál a rendszerrel a jegyek ellenőrzéséhez.

---

# 📚 API dokumentáció

A Swagger felületen az összes API endpoint megtekinthető és kipróbálható.

---

# 🧪 Tesztelés

A rendszer **Cypress end-to-end (E2E) tesztelést** használ frontend és backend oldalon.

A backend:

- több mint **30 tesztelt endpoint**
- **87 automatikus teszt**
- kb. **92% lefedettség**

A frontend oldalon a legfontosabb user flow-k tesztelve vannak:

- 🔐 regisztráció (register)
- 🔑 bejelentkezés (login)

A tesztek valós felhasználói működést szimulálnak (E2E), így teljes folyamatokat ellenőriznek.

---

## 🗄️ Teszt adatbázis

A backend tesztek egy külön adatbázist használnak:

- elkülönül a production DB-től    
- szabadon módosítható  
- nem veszélyezteti az éles adatokat  

---

## ▶️ Tesztek futtatása

npm run dev:test
npx cypress open

---

# 🗄️ Adatbázis inicializálása

A projekt tartalmaz scriptet az adatbázis gyors létrehozásához, feltöltéséhez és exportálásához.

A scriptek a **MongoDB `mongoimport` és `mongoexport` eszközeit** használják, és JSON fájlokból dolgoznak.

---

## Adatbázis import (feltöltés)

import_db.bat