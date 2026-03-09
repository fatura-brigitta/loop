/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Kezdőoldal adatai
 */

/**
 * @swagger
 * /api/home/leaderboard:
 *   get:
 *     summary: Top 3 felhasználó pontszám alapján
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Legjobb felhasználók
 *         content:
 *           application/json:
 *             example:
 *               - name: "Teszt Elek"
 *                 points: 320
 *                 profile_image: "/profile/default.png"
 *               - name: "Anna"
 *                 points: 250
 *                 profile_image: "/profile/default.png"
 *               - name: "Béla"
 *                 points: 200
 *                 profile_image: "/profile/default.png"
 */

/**
 * @swagger
 * /api/home/movies:
 *   get:
 *     summary: Véletlenszerűen kiválasztott filmek a kezdőoldalra
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Film lista
 *         content:
 *           application/json:
 *             example:
 *               - id: "65f2e2d0b93d9c3d9f1a1111"
 *                 title: "Interstellar"
 *                 backdrop: "/movies/interstellar-bg.jpg"
 *                 poster: "/movies/interstellar.jpg"
 *                 genre: "Sci-Fi"
 *                 review: 9
 *                 playtime: 169
 */

/**
 * @swagger
 * /api/home/pricing:
 *   get:
 *     summary: Jegy árak és szorzók
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Ár információk
 *         content:
 *           application/json:
 *             example:
 *               basePrice: 500
 *               screeningTypes:
 *                 - id: "1"
 *                   type: "2D"
 *                   percent: 100
 *                 - id: "2"
 *                   type: "3D"
 *                   percent: 120
 *               ticketTypes:
 *                 - id: "1"
 *                   type: "Diák"
 *                   percent: 80
 *                 - id: "2"
 *                   type: "Felnőtt"
 *                   percent: 100
 *       500:
 *         description: Szerver hiba
 */