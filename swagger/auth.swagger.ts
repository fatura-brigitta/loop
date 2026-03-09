/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Felhasználó hitelesítés
 */

/**
 * @swagger
 * /api/auth:
 *   get:
 *     summary: Bejelentkezett felhasználó adatai
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Felhasználó adatai
 *       401:
 *         description: Nem vagy bejelentkezve
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: Bejelentkezés
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "user@email.com"
 *             password: "password123"
 *     responses:
 *       200:
 *         description: Sikeres login
 *       401:
 *         description: Hibás email vagy jelszó
 *       403:
 *         description: Email nincs megerősítve
 */

/**
 * @swagger
 * /api/auth:
 *   put:
 *     summary: Regisztráció
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Teszt Elek"
 *             email: "user@email.com"
 *             password: "password123"
 *             phone_number: "+36301234567"
 *             gender: "MALE"
 *             profile_image: "/profile/default.png"
 *             consent: true
 *     responses:
 *       201:
 *         description: Sikeres regisztráció
 *       400:
 *         description: Hibás bemenet
 *       409:
 *         description: Email vagy telefonszám már használatban
 */

/**
 * @swagger
 * /api/auth:
 *   delete:
 *     summary: Kijelentkezés
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Sikeres logout
 */