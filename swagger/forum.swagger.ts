/**
 * @swagger
 * tags:
 *   name: Forum
 *   description: Fórum posztok és hozzászólások
 */

/**
 * @swagger
 * /api/forum:
 *   get:
 *     summary: Fórum posztok lekérése egy filmhez
 *     tags: [Forum]
 *     parameters:
 *       - in: query
 *         name: movie
 *         required: true
 *         schema:
 *           type: string
 *         description: Film azonosító
 *     responses:
 *       200:
 *         description: Posztok listája
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/forum:
 *   post:
 *     summary: Új fórum poszt létrehozása
 *     tags: [Forum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             movie_id: "65f2e2d0b93d9c3d9f1a1111"
 *             comment: "Nagyon jó film volt!"
 *             review: 9
 *     responses:
 *       200:
 *         description: Poszt létrehozva
 *       401:
 *         description: Nincs bejelentkezve
 *       400:
 *         description: Hiányzó adatok
 */

/**
 * @swagger
 * /api/forum/reply:
 *   post:
 *     summary: Válasz írása fórum posztra
 *     tags: [Forum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             forum_id: "65f2e2d0b93d9c3d9f1a2222"
 *             comment: "Egyetértek!"
 *     responses:
 *       200:
 *         description: Válasz létrehozva
 *       401:
 *         description: Nincs bejelentkezve
 *       400:
 *         description: Hiányzó adatok
 */

/**
 * @swagger
 * /api/forum/vote:
 *   post:
 *     summary: Reakció fórum posztra
 *     tags: [Forum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             post_id: "65f2e2d0b93d9c3d9f1a2222"
 *             type: "LIKE"
 *     responses:
 *       200:
 *         description: Reakció rögzítve
 *       401:
 *         description: Nincs bejelentkezve
 *       400:
 *         description: Hibás kérés
 */