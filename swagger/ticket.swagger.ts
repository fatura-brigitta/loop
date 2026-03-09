/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Jegyek kezelése és ellenőrzése
 */

/**
 * @swagger
 * /api/ticket/delete:
 *   delete:
 *     summary: Egy jegy törlése
 *     tags: [Ticket]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             ticketId: "65f2e2d0b93d9c3d9f1a1111"
 *     responses:
 *       200:
 *         description: Jegy törölve
 *       400:
 *         description: Hiányzó ticketId
 *       401:
 *         description: Nem vagy bejelentkezve
 *       403:
 *         description: Nincs jogosultság
 *       404:
 *         description: Jegy nem található
 *       500:
 *         description: Szerver hiba
 */

/**
 * @swagger
 * /api/ticket/delete-all:
 *   delete:
 *     summary: Régi jegyek törlése
 *     tags: [Ticket]
 *     responses:
 *       200:
 *         description: Jegyek törölve
 *       401:
 *         description: Nem vagy bejelentkezve
 */

/**
 * @swagger
 * /api/ticket/scan/{token}:
 *   get:
 *     summary: Jegy QR token ellenőrzése
 *     tags: [Ticket]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: QR kód token
 *     responses:
 *       200:
 *         description: Jegy adatok
 *         content:
 *           application/json:
 *             example:
 *               used: false
 *               movie: "Interstellar"
 *               hall: "Terem 1"
 *               start: "2026-03-10T18:00:00Z"
 *               row: 5
 *               seat: 7
 *               type: "Normál"
 *       404:
 *         description: Érvénytelen jegy
 */