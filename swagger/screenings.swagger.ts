/**
 * @swagger
 * tags:
 *   name: Screenings
 *   description: Vetítések kezelése
 */

/**
 * @swagger
 * /api/screenings:
 *   get:
 *     summary: Vetítések lekérése
 *     tags: [Screenings]
 *     responses:
 *       200:
 *         description: Vetítések listája
 *         content:
 *           application/json:
 *             example:
 *               - id: "abc123"
 *                 start: "2026-03-10T18:00:00Z"
 *                 movies:
 *                   title: "Interstellar"
 *                 screening_types:
 *                   type: "2D"
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/screenings:
 *   post:
 *     summary: Vetítés kiválasztása
 *     tags: [Screenings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: "65f2e2d0b93d9c3d9f1a1111"
 *     responses:
 *       200:
 *         description: Vetítés kiválasztva
 *       400:
 *         description: Hiányzó azonosító
 */

/**
 * @swagger
 * /api/screenings:
 *   put:
 *     summary: Terem és székek lekérése a kiválasztott vetítéshez
 *     tags: [Screenings]
 *     responses:
 *       200:
 *         description: Terem és szék adatok
 *         content:
 *           application/json:
 *             example:
 *               hall:
 *                 id: "hall123"
 *                 name: "Terem 1"
 *                 row: 10
 *                 column: 12
 *               chairs:
 *                 - id: "chair1"
 *                   row: 1
 *                   column: 1
 *                   state: false
 *                 - id: "chair2"
 *                   row: 1
 *                   column: 2
 *                   state: true
 *       400:
 *         description: Hiányzó vetítés
 *       404:
 *         description: Terem vagy vetítés nem található
 *       500:
 *         description: Szerver hiba
 */