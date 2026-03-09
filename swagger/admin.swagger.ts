/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin műveletek
 */

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Admin adatok lekérése
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *           enum: [movies, halls, screenings, screening_types, bad_words, flagged_comments]
 *     responses:
 *       200:
 *         description: Sikeres lekérés
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Új admin adat létrehozása
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *           enum: [movies, halls, screenings, bad_words]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "Interstellar"
 *             director: "Christopher Nolan"
 *             playtime: 169
 *     responses:
 *       201:
 *         description: Létrehozva
 */

/**
 * @swagger
 * /api/admin:
 *   put:
 *     summary: Admin adat frissítése
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *           enum: [movies, halls]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: "65f2e2d0b93d9c3d9f1a1111"
 *             title: "Interstellar"
 *             playtime: 169
 *     responses:
 *       200:
 *         description: Frissítve
 */

/**
 * @swagger
 * /api/admin:
 *   delete:
 *     summary: Admin adat törlése
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: entity
 *         required: true
 *         schema:
 *           type: string
 *           enum: [movies, halls, screenings, flagged_comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: "65f2e2d0b93d9c3d9f1a1111"
 *     responses:
 *       200:
 *         description: Törölve
 */

/**
 * @swagger
 * /api/admin/adminLogin:
 *   post:
 *     summary: Admin bejelentkezés
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "admin"
 *             password: "password123"
 *     responses:
 *       200:
 *         description: Sikeres login
 */

/**
 * @swagger
 * /api/admin/adminLogout:
 *   post:
 *     summary: Admin kijelentkezés
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Sikeres logout
 */

/**
 * @swagger
 * /api/admin/adminSchedule:
 *   get:
 *     summary: Napi vetítési schedule
 *     tags: [Admin]
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2026-03-10
 *     responses:
 *       200:
 *         description: Vetítések listája
 */

/**
 * @swagger
 * /api/admin/opening:
 *   get:
 *     summary: Mozi nyitvatartás lekérése egy adott napra
 *     tags: [Admin]
 *     description: A megadott dátum alapján visszaadja a mozi nyitási és zárási idejét, figyelembe véve az override napokat is.
 *     parameters:
 *       - in: query
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           example: 2026-03-10
 *         description: A lekérdezni kívánt nap dátuma
 *     responses:
 *       200:
 *         description: Nyitvatartási idő
 *         content:
 *           application/json:
 *             example:
 *               open: "10:00"
 *               close: "22:00"
 *       400:
 *         description: Hiányzó vagy hibás dátum
 *       500:
 *         description: Szerver hiba
 */