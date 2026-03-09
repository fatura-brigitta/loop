/**
 * @swagger
 * tags:
 *   name: Email
 *   description: Email és QR funkciók
 */

/**
 * @swagger
 * /api/email/qr/{token}:
 *   get:
 *     summary: QR kód generálása jegyhez
 *     tags: [Email]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Jegy token
 *     responses:
 *       200:
 *         description: QR kód PNG formátumban
 *         content:
 *           image/png:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Hiányzó token
 */

/**
 * @swagger
 * /api/email/verify-email:
 *   post:
 *     summary: Email cím megerősítése
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "user@email.com"
 *             code: "1234"
 *     responses:
 *       200:
 *         description: Email sikeresen megerősítve
 *       400:
 *         description: Hibás vagy lejárt kód
 *       500:
 *         description: Szerver hiba
 */