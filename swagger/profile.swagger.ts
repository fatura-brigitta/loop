/**
 * @swagger
 * tags:
 *   name: Profile
 *   description: Felhasználói profil műveletek
 */

/**
 * @swagger
 * /api/profile:
 *   get:
 *     summary: Felhasználó profil adatai
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profil adatok
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/profile:
 *   patch:
 *     summary: Profil adatok frissítése
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Teszt Elek"
 *             phone_number: "+36301234567"
 *             gender: "MALE"
 *     responses:
 *       200:
 *         description: Profil frissítve
 *       400:
 *         description: Hibás adat
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/profile:
 *   put:
 *     summary: Jelszó módosítása
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             oldPassword: "oldPassword123"
 *             newPassword: "newPassword123"
 *     responses:
 *       200:
 *         description: Jelszó frissítve
 *       400:
 *         description: Hibás jelszó
 */

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Felhasználó jegyei (aktív és történet)
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Jegyek listája
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/profile/consent:
 *   put:
 *     summary: Marketing hozzájárulás módosítása
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             consent: true
 *     responses:
 *       200:
 *         description: Consent frissítve
 */

/**
 * @swagger
 * /api/profile/coupons:
 *   get:
 *     summary: Felhasználó kuponjai
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Kupon lista
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/profile/discounts:
 *   get:
 *     summary: Elérhető kedvezmények
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Kedvezmények listája
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/profile/profile-image:
 *   put:
 *     summary: Profilkép módosítása
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             profile_image: "/profile/avatar1.png"
 *     responses:
 *       200:
 *         description: Profilkép frissítve
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/profile/ranks:
 *   get:
 *     summary: Rangok listája
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Rang lista
 */

/**
 * @swagger
 * /api/profile/theme:
 *   put:
 *     summary: Felhasználó témájának módosítása
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             theme: "dark"
 *     responses:
 *       200:
 *         description: Téma frissítve
 *       401:
 *         description: Nem vagy bejelentkezve
 */