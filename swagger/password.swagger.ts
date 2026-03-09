/**
 * @swagger
 * tags:
 *   name: Password
 *   description: Jelszó visszaállítás és email kód kezelés
 */

/**
 * @swagger
 * /api/password/forgot-password:
 *   post:
 *     summary: Jelszó visszaállító email küldése
 *     tags: [Password]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "user@email.com"
 *     responses:
 *       200:
 *         description: Email elküldve (vagy ha nem létezik az email akkor is ok)
 *       400:
 *         description: Hiányzó email
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/password/resend-code:
 *   post:
 *     summary: Email megerősítő kód újraküldése
 *     tags: [Password]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "user@email.com"
 *     responses:
 *       200:
 *         description: Kód elküldve
 *       400:
 *         description: Hiányzó email
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/password/reset-password:
 *   post:
 *     summary: Jelszó visszaállítása token segítségével
 *     tags: [Password]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             token: "abc123def456"
 *             password: "newPassword123"
 *     responses:
 *       200:
 *         description: Jelszó sikeresen frissítve
 *       400:
 *         description: Érvénytelen vagy lejárt token
 *       500:
 *         description: Szerver hiba
 */