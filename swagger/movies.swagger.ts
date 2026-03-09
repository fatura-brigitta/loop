/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Filmek kezelése
 */

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Vetített filmek listája
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Film lista
 *         content:
 *           application/json:
 *             example:
 *               - id: "65f2e2d0b93d9c3d9f1a1111"
 *                 title: "Interstellar"
 *                 director: "Christopher Nolan"
 *                 actors: "Matthew McConaughey"
 *                 poster: "/movies/interstellar.jpg"
 *                 playtime: 169
 *                 language: "English"
 *                 genre: "Sci-Fi"
 *                 review: 9
 *                 description: "Űrutazás a túlélésért"
 *       500:
 *         description: Sikertelen lekérés
 */

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Kiválasztott film mentése cookie-ba
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             movieId: "65f2e2d0b93d9c3d9f1a1111"
 *     responses:
 *       200:
 *         description: Film kiválasztva
 *       400:
 *         description: Hiányzó film azonosító
 */

/**
 * @swagger
 * /api/movies:
 *   delete:
 *     summary: Kiválasztott film törlése cookie-ból
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Cookie törölve
 */

/**
 * @swagger
 * /api/movies/selected-movie:
 *   post:
 *     summary: Film kiválasztása ideiglenes cookie-val
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             movieId: "65f2e2d0b93d9c3d9f1a1111"
 *     responses:
 *       200:
 *         description: Film kiválasztva
 *       400:
 *         description: Hiányzó film
 *       500:
 *         description: Szerver hiba
 */